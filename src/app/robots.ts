import { MetadataRoute } from 'next';
import { data } from '@/lib/data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${data.seo.canonicalUrl}/sitemap.xml`,
  };
}
