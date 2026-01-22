'use client';

import { useState } from 'react';
import { formatPrice } from '@/lib/utils';

interface ReferralCalculatorProps {
  compact?: boolean;
}

export function ReferralCalculator({ compact = false }: ReferralCalculatorProps) {
  const [propertyValue, setPropertyValue] = useState(500000);

  const minValue = 0;
  const maxValue = 2000000;
  const step = 10000;

  // German real estate commission is typically 3-7%, using 6% for calculation
  const commissionRate = 0.06;
  const referralRate = 0.20; // 20% of net commission

  const grossCommission = propertyValue * commissionRate;
  const referralCommission = grossCommission * referralRate;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPropertyValue(parseInt(e.target.value, 10));
  };

  const percentage = ((propertyValue - minValue) / (maxValue - minValue)) * 100;

  if (compact) {
    return (
      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="text-xl font-bold mb-4">Tippgeberprovision Rechner</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Empfehlen Sie uns eine Immobilie und erhalten Sie 20% der Netto-Courtage
        </p>

        {/* Slider */}
        <div className="mb-4">
          <label className="text-sm font-medium mb-2 block">Geschätzter Immobilienwert</label>
          <div className="relative">
            <input
              type="range"
              min={minValue}
              max={maxValue}
              step={step}
              value={propertyValue}
              onChange={handleSliderChange}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${percentage}%, hsl(var(--muted)) ${percentage}%, hsl(var(--muted)) 100%)`,
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>0 €</span>
            <span>2.000.000 €</span>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Immobilienwert:</span>
            <span className="font-semibold">{formatPrice(propertyValue)}</span>
          </div>
          <div className="pt-2 border-t border-border">
            <div className="flex justify-between">
              <span className="font-medium">Ihre Tippgeberprovision (20%):</span>
              <span className="text-xl font-bold text-primary">{formatPrice(referralCommission)}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <a
            href="/kontakt"
            className="block w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-medium text-center transition-colors sm:flex-1"
          >
            Jetzt Immobilie empfehlen
          </a>
          <a
            href={`https://wa.me/493046690542?text=${encodeURIComponent(
              'Hallo! Ich möchte eine Immobilie empfehlen.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#25D366] text-white hover:bg-[#1EBE57] px-4 py-2 rounded-lg text-sm font-medium text-center transition-colors sm:flex-1"
          >
            Per WhatsApp empfehlen
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Immobilie empfehlen &amp; 20% Provision sichern</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Kennen Sie jemanden, der eine Immobilie verkaufen möchte?
          <br />
          Ein Tipp genügt, wir übernehmen den Verkauf, Sie erhalten Ihre Provision.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Calculator Section */}
        <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-10 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            Schätzen Sie den Immobilienwert – wir zeigen Ihnen Ihre mögliche Provision.
          </h2>

          {/* Value Display */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 mb-8 text-center border border-primary/20">
            <p className="text-sm font-medium text-muted-foreground mb-2">Immobilienwert</p>
            <p className="text-5xl md:text-6xl font-bold text-primary mb-6">{formatPrice(propertyValue)}</p>

            {/* Slider */}
            <div className="relative px-2">
              <input
                type="range"
                min={minValue}
                max={maxValue}
                step={step}
                value={propertyValue}
                onChange={handleSliderChange}
                className="w-full h-3 bg-muted rounded-full appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${percentage}%, hsl(var(--muted)) ${percentage}%, hsl(var(--muted)) 100%)`,
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-3 px-2">
              <span>0 €</span>
              <span>2 Mio. €</span>
            </div>
          </div>

          {/* Calculation Breakdown */}
          <div className="space-y-4">
            <div className="flex justify-between items-center py-4 border-b border-border">
              <div>
                <p className="font-medium text-foreground">Verkaufspreis</p>
                <p className="text-xs text-muted-foreground mt-1">Geschätzter Wert der Immobilie</p>
              </div>
              <p className="text-2xl font-bold text-foreground">{formatPrice(propertyValue)}</p>
            </div>

            <div className="flex justify-between items-center py-4 border-b border-border">
              <div>
                <p className="font-medium text-foreground">Maklerprovision</p>
                <p className="text-xs text-muted-foreground mt-1">Vom Verkaufspreis</p>
              </div>
              <p className="text-2xl font-bold text-foreground">{formatPrice(grossCommission)}</p>
            </div>

            <div className="bg-primary text-primary-foreground rounded-xl p-6 mt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm opacity-90 mb-1">Ihre Tippgeberprovision</p>
                  <p className="text-3xl md:text-4xl font-bold">{formatPrice(referralCommission)}</p>
                  <p className="text-xs opacity-75 mt-2">20% der Netto-Courtage</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/kontakt"
              className="block w-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-xl text-lg font-bold text-center transition-all hover:scale-105 shadow-md sm:flex-1"
            >
              Jetzt Immobilie empfehlen
            </a>
            <a
              href={`https://wa.me/493046690542?text=${encodeURIComponent(
                'Hallo! Ich möchte eine Immobilie empfehlen.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] text-white hover:bg-[#1EBE57] px-8 py-4 rounded-xl text-lg font-bold text-center transition-all hover:scale-105 shadow-md sm:flex-1"
            >
              Per WhatsApp empfehlen
            </a>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Ihre Vorteile</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-muted-foreground">Garantierte 20 % unserer Netto-Maklerprovision für Sie</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-muted-foreground">Auszahlung nach dem Notartermin</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-muted-foreground">
                  Kein Aufwand für Sie – wir kümmern uns um Bewertung, Vermarktung &amp; Verkauf
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-muted-foreground">Diskret &amp; auf Wunsch anonym</span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">So einfach gehts</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Tipp abgeben</h4>
                  <p className="text-muted-foreground">Tipp abgeben über Kontakt-Button</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Wir nehmen Kontakt auf</h4>
                  <p className="text-muted-foreground">Wir nehmen Kontakt auf und vermitteln die Immobilie</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Provision erhalten</h4>
                  <p className="text-muted-foreground">Sie erhalten Ihre Provision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
