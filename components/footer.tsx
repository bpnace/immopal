import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Image
              src="/images/logo1.png"
              alt="immopal Logo"
              width={120}
              height={40}
              className="h-30x w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm">
              Ihr vertrauensvoller Partner für Immobilien in Deutschland seit 2026
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/angebote"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Angebote
                </Link>
              </li>
              <li>
                <Link
                  href="/verkaufen"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Verkaufen
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
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <a href="mailto:info@immo-pal.de" className="hover:text-primary transition-colors">
                  info@immo-pal.de
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                <a href="tel:+493046690542" className="hover:text-primary transition-colors">
                  030 46690542
                </a>
              </li>
              <li className="text-sm text-muted-foreground">Genfenbergstraße 23, 13595 Berlin</li>
            </ul>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://wa.me/493046690542"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-15 w-15 items-center justify-center rounded-md transition-colors"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <Image
                  src="/images/WhatsApp.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="h-8 w-8 opacity-70 transition-opacity group-hover:opacity-100"
                />
              </a>

              <a
                href="https://www.instagram.com/immo.pal?igsh=MW5wbW9oMDd5enZrZQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-15 w-15 items-center justify-center transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <Image
                  src="/images/Instagram_logo_2016.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="h-8 w-8 opacity-70 transition-opacity group-hover:opacity-100"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
             2026 ©immo-pal Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
