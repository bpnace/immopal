import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

// Static robots.txt for static export compatibility
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
