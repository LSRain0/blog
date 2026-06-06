import rss from '@astrojs/rss';
import { getCollection, render } from 'astro:content';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const notes = await getCollection('notes', ({ data }) => !data.draft);

  const allEntries = [
    ...posts.map(post => ({ ...post, link: `/blog/${post.id}/`, type: 'post' as const })),
    ...notes.map(note => ({ ...note, link: `/notes/${note.id}/`, type: 'note' as const })),
  ].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const container = await AstroContainer.create();
  const items = [];
  for (const entry of allEntries) {
    const { Content } = await render(entry);
    const html = await container.renderToString(Content);
    items.push({
      title: entry.data.title,
      pubDate: entry.data.pubDate,
      description: entry.data.description,
      link: entry.link,
      categories: [
        ...(entry.data.tags || []),
        ...(entry.data.category ? [entry.data.category] : []),
        entry.type === 'note' ? '笔记' : '文章',
      ],
      content: html,
    });
  }

  return rss({
    title: 'LSRain的小屋',
    description: '物理笔记、数学推导、编程记录、生活随想',
    site: context.site!,
    items,
    customData: '<language>zh-CN</language>',
  });
}
