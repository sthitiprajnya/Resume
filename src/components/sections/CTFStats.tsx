"use client";
import React, { useEffect, useState } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { SectionTitle }  from '@/components/ui/SectionTitle';
import { GlassCard }     from '@/components/ui/GlassCard';
import { ScrollReveal, fadeSlideUp, fadeSlideLeft, containerStagger } from '@/components/ui/ScrollReveal';
import { useInView }     from '@/hooks/useInView';
import { CTF_PROFILE }   from '@/data/portfolio';

export function CTFStats() {
  return (
    <section id="ctf" className="py-24 bg-black relative border-t border-border overflow-hidden">

      {/* Subtle hex-grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34z' fill='none' stroke='%2300F5FF' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '56px 100px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle number="06" title="War Games." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ── Left: HackTheBox profile card ── */}
          <ScrollReveal variants={fadeSlideUp} className="lg:col-span-4">
            <GlassCard className="p-6 h-full border-cyan/20 hover:shadow-[var(--glow-cyan-sm)]">

              {/* HTB logo row */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-mono text-[0.6rem] text-text-muted uppercase tracking-widest mb-1">
                    Platform
                  </div>
                  <div className="font-display text-lg text-white font-bold tracking-widest">
                    HackTheBox
                  </div>
                </div>
                {/* Rank badge */}
                <div className="px-3 py-1.5 rounded bg-cyan-ghost border border-cyan/40 text-cyan font-mono text-xs font-bold uppercase tracking-wider shadow-[var(--glow-cyan-sm)]">
                  {CTF_PROFILE.htbRank}
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: 'Points',        value: CTF_PROFILE.htbPoints.toLocaleString() },
                  { label: 'Top',           value: `${CTF_PROFILE.globalPercentile}%` },
                  { label: 'User Owns',     value: CTF_PROFILE.htbUserOwns },
                  { label: 'Root Owns',     value: CTF_PROFILE.htbRootOwns },
                  { label: 'Challenges',    value: CTF_PROFILE.htbChallengesSolved },
                  { label: 'Competitions',  value: CTF_PROFILE.competitions.length },
                ].map(({ label, value }) => (
                  <div key={label} className="p-3 rounded bg-black/40 border border-border">
                    <div className="font-display text-xl text-cyan font-bold">{value}</div>
                    <div className="font-mono text-[0.6rem] text-text-muted uppercase tracking-widest mt-0.5">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Owns visual bars */}
              <div className="space-y-3">
                <OwnsBar label="User Owns" value={CTF_PROFILE.htbUserOwns} max={50} color="cyan" />
                <OwnsBar label="Root Owns" value={CTF_PROFILE.htbRootOwns} max={50} color="green" />
              </div>

              {/* HTB profile link */}
              <a
                href={`https://app.hackthebox.com/users/`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center space-x-2 w-full py-2.5 border border-cyan/30 text-cyan font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-cyan hover:text-black transition-all hover:shadow-[var(--glow-cyan-sm)]"
              >
                <span>VIEW HTB PROFILE</span>
                <span className="text-[10px]">↗</span>
              </a>
            </GlassCard>
          </ScrollReveal>

          {/* ── Right: Attack category proficiency ── */}
          <ScrollReveal variants={fadeSlideLeft} className="lg:col-span-8">
            <GlassCard className="p-6 h-full">
              <h3 className="font-mono text-sm text-white mb-6 border-b border-border pb-3">
                // ATTACK_CATEGORY_PROFICIENCY
              </h3>

              <ScrollReveal variants={containerStagger} className="space-y-5">
                {CTF_PROFILE.attackCategories.map((cat) => (
                  <ScrollReveal key={cat.label} variants={fadeSlideUp}>
                    <SkillBar label={cat.label} level={cat.level} />
                  </ScrollReveal>
                ))}
              </ScrollReveal>
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* ── CTF competition history ── */}
        <ScrollReveal variants={fadeSlideUp} delay={0.3} className="mt-10">
          <GlassCard className="p-6">
            <h3 className="font-mono text-sm text-white mb-6 border-b border-border pb-3">
              // CTF_COMPETITION_HISTORY
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CTF_PROFILE.competitions.map((comp, i) => (
                <div
                  key={i}
                  className="p-4 rounded bg-black/50 border border-border hover:border-cyan/40 transition-colors group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="font-mono text-[0.6rem] text-text-muted uppercase tracking-widest">
                      {comp.year}
                    </div>
                    <div className="px-2 py-0.5 rounded-sm bg-green-ghost border border-green/30 font-mono text-[0.6rem] text-green uppercase tracking-widest">
                      {comp.placement}
                    </div>
                  </div>

                  <h4 className="font-heading text-sm font-bold text-white mb-2 leading-snug group-hover:text-cyan transition-colors">
                    {comp.name}
                  </h4>

                  <div className="flex items-center justify-between">
                    <div className="font-mono text-[0.65rem] text-text-secondary">
                      {comp.solved} challenges solved
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {comp.tags.map(tag => (
                      <span key={tag} className="font-mono text-[0.55rem] text-text-muted px-2 py-0.5 rounded bg-surface border border-border uppercase tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── Sub-components ─────────────────────────────────────────────

function SkillBar({ label, level }: { label: string; level: number }) {
  const { ref, isInView } = useInView();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !animated) setAnimated(true);
  }, [isInView, animated]);

  const colorClass =
    level >= 85 ? 'bg-cyan shadow-[var(--glow-cyan-sm)]'  :
    level >= 65 ? 'bg-green shadow-[var(--glow-green-sm)]' :
                  'bg-violet shadow-[var(--glow-violet-sm)]';

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-[0.7rem] text-text-secondary uppercase tracking-wider">
          {label}
        </span>
        <span className="font-display text-sm text-white font-bold">{level}%</span>
      </div>
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <div
          className={clsx('h-full rounded-full transition-[width] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]', colorClass)}
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

function OwnsBar({ label, value, max, color }: { label: string; value: number; max: number; color: 'cyan' | 'green' }) {
  const { ref, isInView } = useInView();
  const [animated, setAnimated] = useState(false);
  const pct = Math.min(100, (value / max) * 100);

  useEffect(() => {
    if (isInView && !animated) setAnimated(true);
  }, [isInView, animated]);

  const barClass = color === 'cyan'
    ? 'bg-cyan shadow-[var(--glow-cyan-sm)]'
    : 'bg-green shadow-[var(--glow-green-sm)]';

  const textClass = color === 'cyan' ? 'text-cyan' : 'text-green';

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="font-mono text-[0.65rem] text-text-muted uppercase tracking-widest">{label}</span>
        <span className={clsx('font-mono text-[0.65rem] font-bold', textClass)}>{value}</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <div
          className={clsx('h-full rounded-full transition-[width] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]', barClass)}
          style={{ width: animated ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  );
}
