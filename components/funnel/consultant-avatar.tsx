'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface ConsultantAvatarProps {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ConsultantAvatar({
  name,
  role,
  initials,
  photo,
  size = 'md',
  className,
}: ConsultantAvatarProps) {
  const sizeClasses = {
    sm: 'w-20 h-20 text-2xl',
    md: 'w-32 h-32 text-4xl',
    lg: 'w-40 h-40 text-5xl',
  };

  const avatarVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <motion.div
      className={cn(
        'flex flex-col items-center justify-center border border-border bg-card p-8 text-center min-h-[320px]',
        className
      )}
      initial="hidden"
      animate="visible"
      variants={avatarVariants}
    >
      {/* Avatar Circle */}
      <div
        className={cn(
          'mb-4 flex items-center justify-center rounded-full overflow-hidden',
          photo ? '' : 'bg-primary',
          sizeClasses[size]
        )}
      >
        {photo ? (
          <Image
            src={photo}
            alt={name}
            width={size === 'sm' ? 80 : size === 'md' ? 128 : 160}
            height={size === 'sm' ? 80 : size === 'md' ? 128 : 160}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <span className="font-bold text-primary-foreground">{initials}</span>
        )}
      </div>

      {/* Name and Role */}
      <div>
        <h3 className="text-lg font-bold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </motion.div>
  );
}
