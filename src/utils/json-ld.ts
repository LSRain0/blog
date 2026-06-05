export interface ArticleSchema {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  tags?: string[];
}

export function websiteSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LSRain的小屋',
    url: siteUrl,
    description: '物理笔记、数学推导、编程记录、生活随想',
    author: {
      '@type': 'Person',
      name: 'LSRain',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function articleSchema(data: ArticleSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    url: data.url,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      '@type': 'Person',
      name: 'LSRain',
    },
    publisher: {
      '@type': 'Organization',
      name: 'LSRain的小屋',
    },
    ...(data.image ? { image: data.image } : {}),
    ...(data.tags?.length ? { keywords: data.tags.join(', ') } : {}),
  };
}

export function breadcrumbListSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
