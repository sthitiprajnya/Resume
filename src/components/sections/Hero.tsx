"use client";
import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { PERSONAL } from '@/data/portfolio';
import { PORTFOLIO_CONFIG } from '@/data/portfolio.config';

const ArchitecturalGrid = lazy(() => import('@/components/canvas/ArchitecturalGrid').then(mod => ({ default: mod.ArchitecturalGrid })));

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-base"
    >
      <Suspense fallback={null}>
        <ArchitecturalGrid />
      </Suspense>

      <div className="relative z-10 w-full max-w-[1200px] px-6 flex flex-col items-center text-center">

        {/* Massive Typographic Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <h1 className="font-primary text-hero text-text-primary tracking-tight leading-tight max-w-4xl mx-auto">
            Securing Enterprise Infrastructure &amp; Automating Defenses.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-primary text-lg text-text-secondary max-w-2xl mb-12"
        >
          {PERSONAL.tagline}
        </motion.p>

        {/* Metric Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mb-16"
        >
          {PORTFOLIO_CONFIG.heroMetrics.map((metric, i) => (
            <div key={i} className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center border border-border-subtle bg-surface/50 backdrop-blur-md">
              <span className="font-primary text-4xl font-bold text-accent-cyan mb-2">
                <CountUp end={metric.value} duration={2.5} suffix={metric.suffix} delay={0.6} />
              </span>
              <span className="font-mono text-sm text-text-muted">
                {metric.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href={PERSONAL.resumeUrl}
            download
            className="inline-flex items-center justify-center font-primary font-medium text-base bg-accent-cyan text-base px-8 py-3 rounded hover:bg-accent-cyan/90 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.4)]"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
          <button
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center justify-center font-primary font-medium text-base px-8 py-3 rounded border border-border-subtle text-text-primary hover:bg-surface transition-colors"
          >
            View Projects
          </button>
        </motion.div>

      </div>
    </section>
  );
}
