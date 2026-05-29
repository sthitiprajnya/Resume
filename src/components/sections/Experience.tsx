"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '@/data/portfolio.config';

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(PORTFOLIO_CONFIG.experienceTimeline[0].id);

  return (
    <section id="experience" className="py-24 bg-surface relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-primary text-section font-bold text-text-primary mb-4">
            Enterprise Impact
          </h2>
          <p className="font-primary text-text-secondary">
            Career progression and measurable business value delivered.
          </p>
        </motion.div>

        <div className="relative border-l border-border-subtle pl-8 ml-4 md:ml-0 md:pl-12">
          {PORTFOLIO_CONFIG.experienceTimeline.map((item, index) => {
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-8 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-accent-cyan border-4 border-surface" />

                {/* Card */}
                <div
                  className={`glass-panel border rounded-xl overflow-hidden cursor-pointer transition-colors ${isExpanded ? 'border-accent-cyan/50 bg-base' : 'border-border-subtle bg-surface/50 hover:border-accent-cyan/30'}`}
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                >
                  <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-primary font-bold text-lg text-text-primary">
                        {item.role}
                      </h3>
                      <p className="font-mono text-sm text-accent-cyan mt-1">
                        {item.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-text-muted font-mono text-sm">
                      <span>{item.period}</span>
                      <svg className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 border-t border-border-subtle mt-2">
                          <ul className="space-y-3 mt-4">
                            {item.impactPoints.map((point, i) => (
                              <li key={i} className="flex items-start text-text-secondary font-primary text-sm leading-relaxed">
                                <svg className="w-5 h-5 text-accent-cyan mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
