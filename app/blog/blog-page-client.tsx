'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { fetchArticles, type Article } from '@/lib/articles';
import { formatDate } from '@/lib/utils';
import { BlogArticleClient } from './blog-article-client';

export function BlogPageClient() {
  const [slug, setSlug] = useState<string | null>(null);
  const [searchReady, setSearchReady] = useState(false);

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSlug(params.get('slug'));
    setSearchReady(true);
  }, []);

  useEffect(() => {
    if (!searchReady || slug) return;
    async function loadArticles() {
      try {
        setLoading(true);
        const data = await fetchArticles();
        setArticles(data);
      } catch (err) {
        console.error('Failed to fetch articles:', err);
        const message =
          err instanceof Error ? err.message : typeof err === 'string' ? err : 'Unknown error while fetching articles';
        setError(process.env.NODE_ENV === 'production' ? 'Fehler beim Laden der Artikel' : message);
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, [searchReady, slug]);

  if (searchReady && slug) {
    return <BlogArticleClient slug={slug} />;
  }

  if (error) {
    return (
      <main className="container mx-auto px-4 py-20">
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary/5 py-12 min-h-[220px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aktuelle Beiträge, Markt-Insights und Tipps rund um Immobilien.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Lade Artikel...</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <p className="text-lg text-muted-foreground">Noch keine Artikel verfügbar.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={{ pathname: '/blog', query: { slug: article.slug } }}
                className="group bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="relative h-56 bg-muted">
                  <Image
                    src={article.imageUrl || '/images/hero1.webp'}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{formatDate(article.createdAt)}</span>
                    {article.tags.length > 0 && (
                      <>
                        <span>•</span>
                        <span className="line-clamp-1">{article.tags.slice(0, 2).join(', ')}</span>
                      </>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  {article.summaryText && (
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {article.summaryText}
                    </p>
                  )}
                  <div className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Lesen →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
