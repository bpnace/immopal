'use client';

import { TileOption } from './tile-option';
import { cn } from '@/lib/utils';

export interface TileSelectOption {
  label: string;
  value: string;
  icon?: string | { type: 'image'; src: string; alt?: string };
}

export interface MultiTileSelectProps {
  options: TileSelectOption[];
  value: string | string[];
  onChange: (value: string | string[]) => void;
  multiSelect?: boolean;
  columns?: 2 | 3 | 4;
  disabled?: boolean;
  onAutoAdvance?: (value?: string | string[]) => void; // Callback for auto-advance
  autoAdvanceDelay?: number;        // Configurable delay (default 300ms)
}

export function MultiTileSelect({
  options,
  value,
  onChange,
  multiSelect = false,
  columns = 4,
  disabled = false,
  onAutoAdvance,
  autoAdvanceDelay = 300,
}: MultiTileSelectProps) {
  const handleSelect = (optionValue: string) => {
    if (multiSelect) {
      // Multi-select mode: toggle selection, no auto-advance
      const currentValues = Array.isArray(value) ? value : [];
      const newValues = currentValues.includes(optionValue)
        ? currentValues.filter((v) => v !== optionValue)
        : [...currentValues, optionValue];
      onChange(newValues);
    } else {
      // Single-select mode: update value, then auto-advance
      onChange(optionValue);

      // Auto-advance after delay (if callback provided)
      if (onAutoAdvance) {
        setTimeout(() => {
          onAutoAdvance(optionValue);
        }, autoAdvanceDelay);
      }
    }
  };

  const isSelected = (optionValue: string): boolean => {
    if (multiSelect) {
      return Array.isArray(value) && value.includes(optionValue);
    }
    return value === optionValue;
  };

  // Map columns to Tailwind grid classes
  const gridColsClass = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  }[columns];

  return (
    <div
      className={cn(
        'grid gap-4',
        'grid-cols-1 sm:grid-cols-2',
        gridColsClass
      )}
      role={multiSelect ? 'group' : 'radiogroup'}
      aria-label="Auswahlmöglichkeiten"
    >
      {options.map((option) => (
        <TileOption
          key={option.value}
          label={option.label}
          value={option.value}
          icon={option.icon}
          selected={isSelected(option.value)}
          onClick={() => handleSelect(option.value)}
          disabled={disabled}
        />
      ))}
    </div>
  );
}
