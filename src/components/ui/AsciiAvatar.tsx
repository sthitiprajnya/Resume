"use client";
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

// The avatar renders as a terminal "biometric ID scan" using JetBrains Mono,
// which is already loaded by the project. Each character is chosen so the face
// reads clearly even at small sizes. The scanline sweeps over the top half;
// the metadata panel beneath uses real portfolio data.
const AVATAR_LINES = [
  '  ╭──────────────────────────╮  ',
  '  │  BIOMETRIC_ID :: SB-2025 │  ',
  '  ╰──────────────────────────╯  ',
  '                                 ',
  '         ╭───────────╮           ',
  '         │  ◈     ◈  │           ',
  '         │           │           ',
  '         │   ╌╌╌╌╌   │           ',
  '         │  ╰─────╯  │           ',
  '         ╰─────┬─────╯           ',
  '        ╭──────┴──────╮          ',
  '        │ ▓▓▓▓▓▓▓▓▓▓ │          ',
  '        │ ▓▓▓▓▓▓▓▓▓▓ │          ',
  '        ╰─────────────╯          ',
  '                                 ',
];

// Metadata rows shown beneath the face — each line types in sequentially.
const META_LINES = [
  '├─ NAME   :  STHITAPRAJNA BISWAL',
  '├─ ROLE   :  INFOSEC ENGINEER',
  '├─ ORG    :  iServeU TECHNOLOGY',
  '├─ BASE   :  BHUBANESWAR, IN',
  '╰─ STATUS :  ● ACTIVE',
];

interface AsciiAvatarProps {
  className?: string;
}

export function AsciiAvatar({ className }: AsciiAvatarProps) {
  const [visibleMeta, setVisibleMeta] = useState(0);
  const [scanPos, setScanPos] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Animate the metadata lines appearing one by one after mount
  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleMeta(META_LINES.length);
      return;
    }
    const timer = setInterval(() => {
      setVisibleMeta(prev => {
        if (prev >= META_LINES.length) { clearInterval(timer); return prev; }
        return prev + 1;
      });
    }, 300);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  // Animate the scanline sweeping downward over the face art
  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setScanPos(prev => (prev >= AVATAR_LINES.length - 1 ? 0 : prev + 1));
    }, 120);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <div
      className={clsx(
        'relative rounded-md border border-cyan/40 bg-black overflow-hidden',
        'shadow-[0_0_30px_rgba(0,245,255,0.12)]',
        'group transition-all duration-500 hover:border-cyan hover:shadow-[var(--glow-cyan-md)]',
        className
      )}
    >
      {/* ── Terminal title bar ───────────────────────────── */}
      <div className="flex items-center space-x-2 px-3 py-2 bg-[#0a0a0a] border-b border-cyan/20">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-amber-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 font-mono text-[0.65rem] text-text-muted tracking-widest">
          biometric_scan.sh
        </span>
        {/* Pulsing "live" indicator */}
        <span className="ml-auto flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          <span className="font-mono text-[0.6rem] text-green tracking-widest">LIVE</span>
        </span>
      </div>

      {/* ── Face ASCII art ─────────────────────────────────── */}
      <div className="relative px-2 pt-2 select-none" aria-hidden="true">
        {AVATAR_LINES.map((line, idx) => (
          <div
            key={idx}
            className={clsx(
              'relative font-mono text-[0.68rem] leading-[1.45] whitespace-pre transition-colors duration-100',
              // Highlighted scan row
              !prefersReducedMotion && idx === scanPos
                ? 'text-cyan bg-cyan/10'
                : 'text-cyan/70'
            )}
          >
            {line}
          </div>
        ))}

        {/* Ambient scanline overlay (sweeps full height every 3 s) */}
        {!prefersReducedMotion && (
          <div
            className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none"
            style={{ animation: 'scan-sweep 3s linear infinite' }}
          />
        )}
      </div>

      {/* ── Metadata panel ─────────────────────────────────── */}
      <div className="border-t border-cyan/20 mt-2 px-3 pt-2 pb-3 space-y-[2px]">
        {META_LINES.map((line, idx) => (
          <div
            key={idx}
            className={clsx(
              'font-mono text-[0.65rem] leading-relaxed transition-all duration-300',
              idx < visibleMeta
                ? 'opacity-100 translate-x-0 text-green/90'
                : 'opacity-0 -translate-x-2'
            )}
          >
            {line}
          </div>
        ))}
      </div>

      {/* ── Corner targeting reticles (matching hero aesthetic) ── */}
      <div className="absolute top-10 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan/60 pointer-events-none" />
      <div className="absolute top-10 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan/60 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan/60 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan/60 pointer-events-none" />

      {/* Hover glitch flash */}
      <div
        className="absolute inset-0 bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  );
}
