import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import { fetchArticleBySlug } from '@/lib/articles';
import { formatDate } from '@/lib/utils';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchArticleBySlug(slug);

  if (!article) {
    return { title: 'Artikel nicht gefunden - immopal' };
  }

  return {
    title: `${article.title} - immopal`,
    description: article.summaryText || article.title,
    openGraph: {
      title: article.title,
      description: article.summaryText || article.title,
      images: article.imageUrl ? [article.imageUrl] : undefined,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await fetchArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <span>›</span>
            <span className="text-foreground line-clamp-1">{article.title}</span>
          </nav>
        </div>
      </div>

      <section className="container mx-auto px-4 pt-10 pb-24">
        <div className="mx-auto max-w-3xl space-y-8">
          <header className="space-y-3 text-center">
            <div className="text-sm text-muted-foreground">{formatDate(article.createdAt)}</div>
            <h1 className="text-3xl md:text-4xl font-bold">{article.title}</h1>
            {article.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground bg-background"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="relative aspect-video bg-muted rounded-xl overflow-hidden">
            <Image
              src={article.imageUrl ?? '/images/spacejoy.jpg'}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <article
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
          />
        </div>
      </section>
    </main>
  );
}

