import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Seite nicht gefunden</h1>
        <p className="text-muted-foreground mb-8">
          Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
        >
          Zur Startseite
        </Link>
      </section>
    </main>
  );
}
