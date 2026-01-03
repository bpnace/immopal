import { ReferralCalculator } from '@/components/referral-calculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tippgeberprovision Rechner - immopal',
  description:
    'Empfehlen Sie uns eine Immobilie und erhalten Sie 20% der Netto-Courtage. Berechnen Sie jetzt Ihre potenzielle Provision.',
};

export default function TippgeberprovisionPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <ReferralCalculator />
      </div>
    </main>
  );
}
