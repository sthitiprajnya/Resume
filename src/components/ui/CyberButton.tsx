"use client";
import React from 'react';
import clsx from 'clsx';

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'cyan' | 'green';
  as?: 'button' | 'a';
  href?: string;
  download?: string | boolean;
}

export function CyberButton({
  children,
  className,
  color = 'cyan',
  as = 'button',
  ...props
}: CyberButtonProps) {

  const baseClasses = clsx(
    "cyber-button relative inline-flex items-center justify-center font-mono text-xs uppercase tracking-widest px-6 py-3 transition-all duration-300 overflow-hidden group border-2 bg-transparent active:scale-[0.97]",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 disabled:hover:bg-transparent disabled:hover:shadow-none disabled:hover:text-inherit",
    color === 'cyan' ? [
      "border-cyan text-cyan",
      "hover:bg-cyan hover:text-black",
      "hover:shadow-[var(--glow-cyan-md)]",
      "disabled:hover:text-cyan"
    ] : [
      "border-green text-green",
      "hover:bg-green hover:text-black",
      "hover:shadow-[var(--glow-green-md)]",
      "disabled:hover:text-green"
    ],
    className
  );

  const innerContent = (
    <>
      <span className="relative z-10 font-bold">{children}</span>
    </>
  );

  if (as === 'a') {
    return (
      <a className={baseClasses} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {innerContent}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {innerContent}
    </button>
  );
}