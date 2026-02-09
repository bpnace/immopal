import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';

import { BlogPageClient } from './blog-page-client';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Ratgeber, Marktberichte und Tipps rund um Immobilien in Berlin, Brandenburg und Deutschland. Bleiben Sie informiert mit dem ImmoPal Blog.',
  alternates: {
    canonical: `${siteUrl}/blog/`,
  },
  openGraph: {
    title: 'Blog - ImmoPal',
    description:
      'Ratgeber, Marktberichte und Tipps rund um Immobilien in Berlin, Brandenburg und Deutschland. Bleiben Sie informiert mit dem ImmoPal Blog.',
    url: `${siteUrl}/blog/`,
  },
  twitter: {
    title: 'Blog - ImmoPal',
    description:
      'Ratgeber, Marktberichte und Tipps rund um Immobilien in Berlin, Brandenburg und Deutschland. Bleiben Sie informiert mit dem ImmoPal Blog.',
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
