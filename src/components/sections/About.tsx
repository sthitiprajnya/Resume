import React from 'react';

import CountUp from 'react-countup';
import { NeonBorder } from '@/components/ui/NeonBorder';
import { TerminalWindow } from '@/components/ui/TerminalWindow';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ScrollReveal, fadeSlideUp, fadeSlideLeft, containerStagger } from '@/components/ui/ScrollReveal';
import { ABOUT_BIO, ABOUT_STATS, TERMINAL_LINES, PERSONAL } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="py-24 bg-deep relative border-t border-border">

      {/* Decorative background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(var(--color-border) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle number="01" title="Who I Am." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Profile Visual */}
          <ScrollReveal variants={fadeSlideUp} className="order-2 lg:order-1 relative">
            <NeonBorder className="p-2 rounded-lg bg-black" color="cyan">
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded bg-surface">

                {/* Fallback pattern while image loads or if missing */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTEwIDBMICAwIDBMMCAxMEwxMCAxMEwxMCAwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>

                <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-border m-4 rounded">
                  <span className="font-mono text-text-muted text-sm uppercase tracking-widest">
                    [ IMAGE_PLACEHOLDER ]
                  </span>
                </div>

                {/* Target Corners */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan" />

                {/* Availability Badge */}
                {PERSONAL.availability && (
                  <div className="absolute top-6 right-6 flex flex-col items-end">
                    <span className="flex items-center space-x-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
                      </span>
                    </span>
                    <span className="mt-1 font-mono text-[0.6rem] text-green tracking-widest uppercase">
                      AVAILABLE
                    </span>
                  </div>
                )}
              </div>
            </NeonBorder>
          </ScrollReveal>

          {/* Right Column: Bio & Terminal */}
          <div className="order-1 lg:order-2 space-y-8">
            <ScrollReveal variants={containerStagger} className="space-y-6">
              {ABOUT_BIO.map((paragraph, i) => (
                <ScrollReveal key={i} variants={fadeSlideLeft}>
                  <p className="font-body text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
            </ScrollReveal>

            <ScrollReveal variants={fadeSlideUp} delay={0.2}>
              <TerminalWindow lines={TERMINAL_LINES} />
            </ScrollReveal>

            {/* Stat Counters */}
            <ScrollReveal
              variants={containerStagger}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border mt-8"
            >
              {ABOUT_STATS.map((stat, i) => (
                <ScrollReveal key={i} variants={fadeSlideUp} className="flex flex-col">
                  <div className="font-display text-3xl md:text-4xl text-cyan mb-2">
                    {/* Handle React CountUp ES module default export issue */}
                    {typeof CountUp === 'function' ? (
                      <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce separator="," />
                    ) : (
                      // @ts-expect-error CountUp has a weird module export mismatch
                      <CountUp.default end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce separator="," />
                    )}
                    {stat.suffix}
                  </div>
                  <div className="font-mono text-[0.65rem] text-text-muted uppercase tracking-widest leading-snug">
                    {stat.label}
                  </div>
                </ScrollReveal>
              ))}
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}