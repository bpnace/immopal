import { MetadataRoute } from 'next';
import configPromise from '@payload-config';
import { getPayload } from 'payload';

export const dynamic = 'force-dynamic';

type SitemapDoc = {
  slug?: unknown;
  updatedAt?: unknown;
} & Record<string, unknown>;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://immopal.de';

  // Try to fetch dynamic content, but fallback to static sitemap if DB is unavailable
  let propertyDocs: SitemapDoc[] = [];
  let blogDocs: SitemapDoc[] = [];

  try {
    const payload = await getPayload({ config: configPromise });

    // Fetch all available properties
    const properties = await payload.find({
      collection: 'properties',
      where: { status: { equals: 'available' } },
      limit: 1000,
    });
    propertyDocs = properties.docs;

    // Fetch all published blog posts
    const blogPosts = await payload.find({
      collection: 'blog',
      where: { status: { equals: 'published' } },
      limit: 1000,
    });
    blogDocs = blogPosts.docs;
  } catch {
    // Database not available during build - return static sitemap only
    console.log('Database not available for sitemap generation, using static pages only');
  }

  return [
    // Static pages - High priority pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/immobilien`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kaufen`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/verkaufen`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kostenlose-immobilienbewertung-berlin-brandenburg`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tippgeberprovision`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tippgeber-immobilien-berlin`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },

    // Dynamic property pages
    ...propertyDocs.flatMap((property) => {
      const slug = typeof property.slug === 'string' ? property.slug : null;
      if (!slug) return [];

      const updatedAt = property.updatedAt;
      const lastModified = updatedAt instanceof Date ? updatedAt : new Date(typeof updatedAt === 'string' ? updatedAt : Date.now());

      return [
        {
          url: `${baseUrl}/immobilien/${slug}`,
          lastModified,
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        },
      ];
    }),

    // Dynamic blog pages
    ...blogDocs.flatMap((post) => {
      const slug = typeof post.slug === 'string' ? post.slug : null;
      if (!slug) return [];

      const updatedAt = post.updatedAt;
      const lastModified = updatedAt instanceof Date ? updatedAt : new Date(typeof updatedAt === 'string' ? updatedAt : Date.now());

      return [
        {
          url: `${baseUrl}/blog/${slug}`,
          lastModified,
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        },
      ];
    }),
  ];
}
