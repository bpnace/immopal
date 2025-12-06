'use client';

import { TileOption } from './tile-option';
import { cn } from '@/lib/utils';

export interface TileSelectOption {
  label: string;
  value: string;
  icon?: string;
}

export interface MultiTileSelectProps {
  options: TileSelectOption[];
  value: string | string[];
  onChange: (value: string | string[]) => void;
  multiSelect?: boolean;
  columns?: 2 | 3 | 4;
  disabled?: boolean;
}

export function MultiTileSelect({
  options,
  value,
  onChange,
  multiSelect = false,
  columns = 4,
  disabled = false,
}: MultiTileSelectProps) {
  const handleSelect = (optionValue: string) => {
    if (multiSelect) {
      // Multi-select mode
      const currentValues = Array.isArray(value) ? value : [];
      const newValues = currentValues.includes(optionValue)
        ? currentValues.filter((v) => v !== optionValue)
        : [...currentValues, optionValue];
      onChange(newValues);
    } else {
      // Single-select mode
      onChange(optionValue);
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
