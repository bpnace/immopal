'use client';

import { useState } from 'react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const nowIso = new Date().toISOString();

    const data = {
      type: 'contact',
      timestamp: nowIso,
      contact: {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        // Keep the existing subject values; API/n8n can map them to labels if needed
        subject: formData.get('subject'),
        message: formData.get('message'),
        gdprConsent: formData.get('privacy') === 'on',
        consentTimestamp: nowIso,
        // Honeypot field
        website: formData.get('website'),
      },
      metadata: {
        source: 'website_contact_form',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        // Referrer of the navigation into this page (may be empty)
        referrer: typeof document !== 'undefined' ? document.referrer : '',
        // Current page URL is often more useful than referrer; keep it for backend usage
        pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      },
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: result.message });
        (e.target as HTMLFormElement).reset();
      } else {
        setMessage({ type: 'error', text: result.error || result.message || 'Ein Fehler ist aufgetreten' });
      }
    } catch {
      setMessage({
        type: 'error',
        text: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-8">
      <h2 className="text-2xl font-semibold mb-6">Kontaktformular</h2>

      {message && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            message.type === 'success'
              ? 'bg-green-50 border border-green-200 text-green-800'
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}
        >
          {message.text}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-2">
              Vorname *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-2">
              Nachname *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            disabled={isSubmitting}
            className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Betreff
          </label>
          <select
            id="subject"
            name="subject"
            disabled={isSubmitting}
            className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          >
            <option value="">Bitte wählen...</option>
            <option value="purchase">Kaufinteresse</option>
            <option value="valuation">Immobilienbewertung</option>
            <option value="viewing">Besichtigungstermin</option>
            <option value="general">Allgemeine Anfrage</option>
            <option value="other">Sonstiges</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            disabled={isSubmitting}
            placeholder="Beschreiben Sie hier Ihr Anliegen..."
            className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none disabled:opacity-50"
          ></textarea>
        </div>

        {/* Honeypot field - hidden from real users */}
        <div className="absolute left-[-9999px] opacity-0 pointer-events-none" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            required
            disabled={isSubmitting}
            className="mt-1"
          />
          <label htmlFor="privacy" className="text-sm text-muted-foreground">
            Ich habe die{' '}
            <a href="/datenschutz" className="text-primary hover:underline">
              Datenschutzerklärung
            </a>{' '}
            gelesen und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert werden. *
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
        </button>

        <p className="text-xs text-muted-foreground">* Pflichtfelder</p>
      </form>
    </div>
  );
}
