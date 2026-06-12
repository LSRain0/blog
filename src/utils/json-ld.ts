import { SITE_TITLE, SITE_DESCRIPTION, AUTHOR_NAME } from '../consts';

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
    name: SITE_TITLE,
    url: siteUrl,
    description: SITE_DESCRIPTION,
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
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
      name: AUTHOR_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_TITLE,
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
