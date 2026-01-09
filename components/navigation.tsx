'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Angebote', href: '/angebote' },
    { name: 'Verkaufen', href: '/verkaufen' },
    { name: 'Über uns', href: '/ueber-uns' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-[999] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center cursor-default">
              <Image
                src="/images/logo1.png"
                alt="immopal Logo"
                width={140}
                height={46}
                className="h-20 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              href="/kontakt"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Kostenlose Bewertung
            </Link>
            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/493046690542"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors flex-shrink-0 drop-shadow-md p-2 rounded-full"
              aria-label="WhatsApp kontaktieren"
            >
              <Image
                src="/images/WhatsApp.svg"
                alt=""
                width={24}
                height={24}
                className="h-10 w-10"
              />
            </a>
          </div>

          {/* Mobile menu button and WhatsApp */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/493046690542"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="WhatsApp kontaktieren"
            >
              <Image
                src="/images/WhatsApp.svg"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </a>
            <button
              type="button"
              className="text-foreground hover:text-primary transition-colors p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary hover:bg-accent/10 block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="bg-accent text-accent-foreground hover:bg-accent/90 block px-4 py-3 rounded-lg text-base font-semibold mt-4 text-center shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kostenlose Bewertung
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
