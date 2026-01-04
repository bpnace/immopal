import { MetadataRoute } from 'next';
import { fetchArticles } from '@/lib/articles';
import { fetchListings } from '@/lib/listings';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://immopal.de';

  // Try to fetch dynamic content, but fallback to static sitemap if the CMS is unavailable
  let listings: Array<{ slug: string; createdAt?: string }> = [];
  let articles: Array<{ slug: string; createdAt?: string }> = [];

  try {
    listings = await fetchListings();
    articles = await fetchArticles(200);
  } catch {
    console.log('CMS not available for sitemap generation, using static pages only');
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

    // Dynamic listing pages
    ...listings.flatMap((listing) => {
      if (!listing?.slug) return [];
      const lastModified =
        typeof listing.createdAt === 'string' && listing.createdAt.length > 0 ? new Date(listing.createdAt) : new Date();

      return [
        {
          url: `${baseUrl}/immobilien/${listing.slug}`,
          lastModified,
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        },
      ];
    }),

    // Dynamic blog pages
    ...articles.flatMap((article) => {
      if (!article?.slug) return [];
      const lastModified =
        typeof article.createdAt === 'string' && article.createdAt.length > 0 ? new Date(article.createdAt) : new Date();

      return [
        {
          url: `${baseUrl}/blog/${article.slug}`,
          lastModified,
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        },
      ];
    }),
  ];
}
