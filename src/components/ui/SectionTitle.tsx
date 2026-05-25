"use client";
import React from 'react';
import clsx from 'clsx';
import { ScrollReveal, fadeSlideLeft } from './ScrollReveal';

interface SectionTitleProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionTitle({ number, title, className }: SectionTitleProps) {
  return (
    <ScrollReveal
      variants={fadeSlideLeft}
      className={clsx("mb-12 md:mb-16", className)}
    >
      <div className="flex flex-col">
        <span className="font-mono text-label text-cyan opacity-60 mb-2 block">
          // {number}
        </span>
        <h2 className="font-heading text-section font-bold text-white tracking-tight">
          {title}
        </h2>
      </div>
    </ScrollReveal>
  );
}