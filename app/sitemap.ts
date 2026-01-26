import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

// Static sitemap for static export compatibility
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const withSlash = (path: string) => {
    if (path === '/') return `${baseUrl}/`;
    return `${baseUrl}${path.endsWith('/') ? path : `${path}/`}`;
  };

  return [
    // Static pages - High priority pages
    {
      url: withSlash('/'),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: withSlash('/angebote'),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: withSlash('/kaufen'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: withSlash('/verkaufen'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: withSlash('/kostenlose-immobilienbewertung-berlin-brandenburg'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: withSlash('/tippgeberprovision'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: withSlash('/tippgeber-immobilien-berlin'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: withSlash('/blog'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: withSlash('/ueber-uns'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: withSlash('/kontakt'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: withSlash('/impressum'),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: withSlash('/datenschutz'),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
