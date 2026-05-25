"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import clsx from 'clsx';

interface TypewriterTextProps {
  sequence: (string | number)[];
  className?: string;
  wrapper?: keyof JSX.IntrinsicElements;
  cursor?: boolean;
  repeat?: number;
}

export function TypewriterText({
  sequence,
  className,
  wrapper = 'span',
  cursor = true,
  repeat = Infinity
}: TypewriterTextProps) {
  return (
    <div className={clsx("inline-block", className)} aria-live="polite">
      <TypeAnimation
        sequence={sequence}
        wrapper={wrapper as any}
        cursor={cursor}
        repeat={repeat}
        className="inline-block"
      />
    </div>
  );
}