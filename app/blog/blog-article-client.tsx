'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DOMPurify from 'dompurify';

import { fetchArticleBySlug, type Article } from '@/lib/articles';
import { formatDate } from '@/lib/utils';

type Props = {
  slug: string;
};

export function BlogArticleClient({ slug }: Props) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await fetchArticleBySlug(slug);
        if (!data) {
          setArticle(null);
          setError(null);
          return;
        }
        setArticle(data);
      } catch (err) {
        console.error('Failed to fetch article:', err);
        const message =
          err instanceof Error ? err.message : typeof err === 'string' ? err : 'Unknown error while fetching article';
        setError(process.env.NODE_ENV === 'production' ? 'Fehler beim Laden des Artikels' : message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <p className="text-muted-foreground">Lade Beitrag...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="rounded-xl border border-border bg-card p-6 text-center text-red-500">
            <p>{error}</p>
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-primary hover:underline">
              ← Zurück zum Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!article) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <h1 className="text-2xl font-semibold mb-2">Beitrag nicht gefunden</h1>
            <p className="text-muted-foreground">Dieser Beitrag ist nicht verfügbar oder wurde entfernt.</p>
            <div className="mt-6">
              <Link href="/blog" className="text-primary hover:underline">
                ← Zurück zum Blog
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Zurück zum Blog
          </Link>
        </div>

        <header className="space-y-4 mb-10">
          <h1 className="text-4xl font-bold leading-tight">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            {article.createdAt && <span>{formatDate(article.createdAt)}</span>}
            {article.tags.length > 0 && (
              <>
                <span>•</span>
                <span>{article.tags.join(', ')}</span>
              </>
            )}
          </div>
        </header>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-muted mb-10">
          <Image
            src={article.imageUrl || '/images/hero1.webp'}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <article
          className="prose prose-gray max-w-none"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(article.bodyHtml, {
              ALLOWED_TAGS: [
                'p', 'br', 'strong', 'em', 'b', 'i', 'u', 'a', 'ul', 'ol', 'li',
                'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'code', 'pre',
                'img', 'figure', 'figcaption', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
                'div', 'span', 'hr'
              ],
              ALLOWED_ATTR: ['href', 'target', 'rel', 'src', 'alt', 'title', 'class', 'id'],
            }),
          }}
        />
      </div>
    </main>
  );
}
