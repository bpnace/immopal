'use client';

import { ConsultantAvatar } from './consultant-avatar';
import { QuestionBox } from './question-box';
import { cn } from '@/lib/utils';

export interface FunnelLayoutProps {
  consultant: {
    name: string;
    role: string;
    initials: string;
    photo?: string;
  };
  question: string;
  subtitle?: string;
  children: React.ReactNode;
  onBack?: () => void;
  onNext: () => void;
  nextLabel?: string;
  showBack?: boolean;
  error?: string;
  nextDisabled?: boolean;
  isSubmitting?: boolean;
  showConsultant?: boolean;
}

export function FunnelLayout({
  consultant,
  question,
  subtitle,
  children,
  onBack,
  onNext,
  nextLabel = 'Weiter',
  showBack = true,
  error,
  nextDisabled = false,
  isSubmitting = false,
  showConsultant = true,
}: FunnelLayoutProps) {
  return (
    <div className="bg-white">
      {/* Consultant Avatar - Fixed LEFT on Desktop, Inline on Mobile */}
      {showConsultant && (
        <>
          <div className="fixed left-8 top-32 z-50 hidden w-64 lg:block">
            <ConsultantAvatar
              name={consultant.name}
              role={consultant.role}
              initials={consultant.initials}
              photo={consultant.photo}
            />
          </div>

          {/* Mobile Consultant (shown inline at top) */}
          <div className="mb-8 lg:hidden">
            <ConsultantAvatar
              name={consultant.name}
              role={consultant.role}
              initials={consultant.initials}
              photo={consultant.photo}
              size="sm"
            />
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="mx-auto w-full max-w-3xl">
        {/* Question Box */}
        <QuestionBox question={question} subtitle={subtitle} />

        {/* Content Area (Tiles/Form Fields) */}
        <div className="mb-8">{children}</div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 rounded-lg border border-destructive bg-destructive/10 p-4">
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}

      </div>
    </div>
  );
}
