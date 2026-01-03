'use client';

import { cn } from '@/lib/utils';

export interface QuestionBoxProps {
  question: string;
  subtitle?: string;
  className?: string;
}

export function QuestionBox({ question, subtitle, className }: QuestionBoxProps) {
  return (
    <div
      className={cn(
        'mb-8 border border-gray-200 bg-gray-100 p-6',
        className
      )}
    >
      <h2 className="text-2xl font-bold text-foreground md:text-3xl">
        {question}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
