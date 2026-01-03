import Image from 'next/image';
import Link from 'next/link';

import { fetchArticles, type Article } from '@/lib/articles';

type Props = {
  limit?: number;
};

export async function BlogPreview({ limit = 3 }: Props) {
  let articles: Article[] = [];

  try {
    articles = await fetchArticles(limit);
  } catch {
    articles = [];
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bestens informiert mit immopal</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Aktuelle Beiträge, Markt-Insights und Tipps rund um Immobilien.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-10 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-6">Neue Beiträge sind in Vorbereitung.</p>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-2 text-sm font-medium hover:bg-muted transition-colors"
            >
              Zum Blog
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.slice(0, limit).map((article) => (
              <div key={article.id} className="bg-card border border-border rounded-lg overflow-hidden flex flex-col">
                <Link href={`/blog/${article.slug}`} className="block">
                  <div className="relative aspect-[16/9] bg-muted">
                    <Image
                      src={article.imageUrl ?? '/images/spacejoy.jpg'}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>

                <div className="p-6 flex flex-col grow">
                  <h3 className="text-lg font-semibold leading-snug mb-2">
                    <Link href={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                      {article.title}
                    </Link>
                  </h3>
                  {article.summaryText && (
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{article.summaryText}</p>
                  )}
                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-6 w-full inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                  >
                    Lesen
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
