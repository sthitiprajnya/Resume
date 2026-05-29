"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '@/data/portfolio.config';

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface relative overflow-hidden z-10 border-t border-border-subtle">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-primary text-section font-bold text-text-primary mb-4">
            Capabilities & Credentials
          </h2>
          <p className="font-primary text-text-secondary max-w-2xl mx-auto">
            Verified offensive security capabilities and industry-recognized certifications.
          </p>
        </motion.div>

        {/* Marquee for Core Capabilities */}
        <div className="mb-20 relative flex overflow-x-hidden group">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex gap-4 whitespace-nowrap py-4">
            {[...PORTFOLIO_CONFIG.skillsCerts.coreCapabilities, ...PORTFOLIO_CONFIG.skillsCerts.coreCapabilities].map((skill, index) => (
              <div
                key={index}
                className="font-primary text-sm md:text-base font-medium px-6 py-3 rounded-full border border-border-subtle bg-base text-text-primary shadow-sm hover:border-accent-cyan hover:text-accent-cyan transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Premium Badge Clusters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_CONFIG.skillsCerts.premiumBadges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel relative flex items-center p-6 border border-border-subtle rounded-xl bg-base hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-shadow overflow-hidden group"
            >
               {/* Accent line */}
               <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${badge.color} opacity-70`} />

               <div className="ml-4">
                 <h4 className="font-primary font-bold text-lg text-text-primary mb-1">
                   {badge.name}
                 </h4>
                 <p className="font-mono text-xs text-text-muted uppercase tracking-wider">
                   {badge.issuer} · VERIFIED
                 </p>
               </div>

               {/* Hover Icon Reveal */}
               <div className="ml-auto opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                 <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                 </svg>
               </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
