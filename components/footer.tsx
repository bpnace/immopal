import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-foreground mb-4">immopal</h3>
            <p className="text-muted-foreground text-sm">
              Ihr vertrauensvoller Immobilienmakler in Berlin und Brandenburg.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/immobilien"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Immobilien
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-uns"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/agb"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <a href="mailto:info@immopal.de" className="hover:text-primary transition-colors">
                  info@immopal.de
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                <a href="tel:+493012345678" className="hover:text-primary transition-colors">
                  +49 (0)30 123 456 78
                </a>
              </li>
              <li className="text-sm text-muted-foreground">Berlin, Deutschland</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} immopal. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
