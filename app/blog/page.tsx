import { Suspense } from 'react';

import { BlogPageClient } from './blog-page-client';

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-12">
            <p className="text-muted-foreground">Lade Blog...</p>
          </div>
        </main>
      }
    >
      <BlogPageClient />
    </Suspense>
  );
}
