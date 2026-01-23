'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type TileIcon = string | { type: 'image'; src: string; alt?: string };

export interface TileOptionProps {
  label: string;
  value: string;
  icon?: TileIcon;
  selected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export function TileOption({
  label,
  value: _value,
  icon,
  selected,
  onClick,
  disabled = false,
}: TileOptionProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'relative w-full border-2 p-6 text-center transition-all duration-200',
        'hover:shadow-lg focus:outline-none',
        !selected && 'focus:ring-2 focus:ring-primary focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        selected
          ? 'border-primary bg-primary/5 shadow-md'
          : 'border-gray-300 bg-white hover:border-gray-400'
      )}
      whileHover={!disabled ? { scale: 1.05 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      aria-pressed={selected}
      aria-label={label}
    >
      {icon && (
        <div
          className={cn(
            'mb-3',
            typeof icon === 'string' ? 'text-4xl' : 'flex justify-center'
          )}
          aria-hidden={typeof icon === 'string' ? 'true' : undefined}
        >
          {typeof icon === 'string' ? (
            icon
          ) : (
            <Image
              src={icon.src}
              alt={icon.alt ?? ''}
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
          )}
        </div>
      )}
      <div
        className={cn(
          'font-semibold text-base',
          selected ? 'text-primary' : 'text-foreground'
        )}
      >
        {label}
      </div>
    </motion.button>
  );
}
