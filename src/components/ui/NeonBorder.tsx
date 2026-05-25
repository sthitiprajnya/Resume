import React from 'react';
import clsx from 'clsx';

interface NeonBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: 'cyan' | 'green' | 'amber' | 'violet';
}

export function NeonBorder({ children, className, color = 'cyan' }: NeonBorderProps) {
  const glowVar = `var(--glow-${color}-sm)`;
  const borderColorVar = `var(--color-${color})`;

  return (
    <div
      className={clsx('relative', className)}
      style={{
        boxShadow: glowVar,
        border: `1px solid ${borderColorVar}`,
      }}
    >
      {children}
    </div>
  );
}