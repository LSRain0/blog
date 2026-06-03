import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../consts';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonicalURL?: URL;
}

export function generateSEO({ title, description, image, canonicalURL }: SEOProps) {
  const pageTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE;
  const pageDescription = description || SITE_DESCRIPTION;
  const pageURL = canonicalURL?.toString() || SITE_URL;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageURL,
      siteName: SITE_TITLE,
      locale: 'zh_CN',
      type: 'website',
      ...(image && { images: [{ url: image }] }),
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: pageTitle,
      description: pageDescription,
      ...(image && { image }),
    },
  };
}
