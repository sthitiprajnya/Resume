"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '@/data/portfolio.config';

const AbstractVisuals = {
  cloud: (
    <svg className="w-full h-full text-accent-cyan/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M20,50 L50,30 L80,50 L50,70 Z" />
      <path d="M20,60 L50,80 L80,60" />
      <path d="M20,70 L50,90 L80,70" />
      <circle cx="50" cy="30" r="2" fill="currentColor" />
      <circle cx="20" cy="50" r="2" fill="currentColor" />
      <circle cx="80" cy="50" r="2" fill="currentColor" />
    </svg>
  ),
  automation: (
    <svg className="w-full h-full text-accent-cyan/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="20" y="20" width="60" height="60" rx="4" />
      <path d="M40,20 L40,80" />
      <path d="M60,20 L60,80" />
      <path d="M20,40 L80,40" />
      <path d="M20,60 L80,60" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
  )
};

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-base relative z-10">
      <div className="max-w-[1200px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-primary text-section font-bold text-text-primary mb-4">
            Engineering & Automation
          </h2>
          <p className="font-primary text-text-secondary max-w-2xl">
            Selected projects demonstrating architectural rigor, cloud hardening pipelines, and agentic workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_CONFIG.featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel group relative border border-border-subtle rounded-xl overflow-hidden bg-surface flex flex-col hover:border-accent-cyan/50 transition-colors duration-300"
            >
              {/* Abstract Visual Header */}
              <div className="h-48 bg-overlay border-b border-border-subtle relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform">
                   {project.type === 'cloud' ? AbstractVisuals.cloud : AbstractVisuals.automation}
                </div>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-mono text-[0.65rem] text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-primary font-bold text-xl text-text-primary mb-3">
                  {project.title}
                </h3>

                <p className="font-primary text-sm text-text-secondary leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-border-subtle">
                  <div className="flex items-start text-text-primary font-primary text-sm font-medium">
                    <svg className="w-5 h-5 text-accent-cyan mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Impact: <span className="text-text-secondary font-normal">{project.impact}</span></span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
