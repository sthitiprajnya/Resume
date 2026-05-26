"use client";
import React, { useState } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard }    from '@/components/ui/GlassCard';
import { CyberButton }  from '@/components/ui/CyberButton';
import { ScrollReveal, fadeSlideUp, fadeSlideLeft, containerStagger } from '@/components/ui/ScrollReveal';
import { PERSONAL, RESUME_HIGHLIGHTS } from '@/data/portfolio';

// The resume section is styled like a "classified document viewer" inside a terminal.
// Redacted sections reveal on hover — a small UX easter egg that reinforces the
// security-engineer aesthetic and gets recruiters to interact with the page.
export function ResumePanel() {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownload = () => {
    setDownloadStarted(true);
    setTimeout(() => setDownloadStarted(false), 3000);
  };

  return (
    <section id="resume" className="py-24 bg-deep relative border-t border-border overflow-hidden">

      {/* Faint diagonal lines background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, var(--color-cyan) 0, var(--color-cyan) 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle number="08" title="Classified File." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Left: Document viewer ── */}
          <ScrollReveal variants={fadeSlideUp} className="lg:col-span-7">
            <GlassCard className="overflow-hidden border-amber/20 hover:shadow-[var(--glow-amber-sm)]">

              {/* Document title bar */}
              <div className="flex items-center justify-between px-5 py-3 bg-black/60 border-b border-amber/20">
                <div className="flex items-center space-x-3">
                  {/* Fake "PDF" icon indicator */}
                  <div className="w-8 h-10 border border-amber/40 rounded-sm relative flex items-center justify-center">
                    <span className="font-mono text-[0.5rem] text-amber font-bold">PDF</span>
                    <div className="absolute top-0 right-0 w-2 h-2 border-l border-b border-amber/40 bg-black" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-white font-bold tracking-widest">
                      Sthitaprajna_Biswal_Resume.pdf
                    </div>
                    <div className="font-mono text-[0.6rem] text-text-muted">
                      CLEARANCE: PUBLIC — DISTRIBUTION AUTHORISED
                    </div>
                  </div>
                </div>
                {/* Stamps */}
                <div className="hidden md:flex items-center space-x-2">
                  <span className="px-2 py-0.5 border border-green/50 text-green font-mono text-[0.55rem] uppercase tracking-widest rounded-sm">
                    VERIFIED
                  </span>
                  <span className="px-2 py-0.5 border border-amber/50 text-amber font-mono text-[0.55rem] uppercase tracking-widest rounded-sm">
                    2025
                  </span>
                </div>
              </div>

              {/* Document body */}
              <div className="p-6 space-y-6 font-mono text-sm">

                {/* Section: Identity */}
                <div>
                  <div className="text-[0.6rem] text-text-muted uppercase tracking-widest mb-2">§ 1.0 SUBJECT IDENTITY</div>
                  <div className="space-y-1 text-text-secondary">
                    <div><span className="text-cyan">NAME_FULL    :</span> Sthitaprajna Biswal</div>
                    <div><span className="text-cyan">ROLE_CURRENT :</span> Information Security Engineer</div>
                    <div><span className="text-cyan">ORGANISATION :</span> iServeU Technology Pvt. Ltd.</div>
                    <div><span className="text-cyan">LOCATION     :</span> Bhubaneswar, Odisha, India</div>
                    <div>
                      <span className="text-cyan">CONTACT      :</span>{' '}
                      {/* Email visible — it's public already */}
                      sthitabiswal2002@gmail.com
                    </div>
                    <div>
                      <span className="text-cyan">SALARY_RANGE :</span>{' '}
                      <span
                        className="redacted cursor-pointer"
                        title="Hover / tap to reveal"
                        role="button"
                        tabIndex={0}
                      >
                        ████ NEGOTIABLE — DISCUSS DIRECTLY ████
                      </span>
                    </div>
                  </div>
                </div>

                {/* Section: Clearances (certifications summary) */}
                <div>
                  <div className="text-[0.6rem] text-text-muted uppercase tracking-widest mb-2">§ 2.0 CLEARANCES &amp; CREDENTIALS</div>
                  <div className="text-text-secondary space-y-1">
                    <div>eJPT v2 · Practical Ethical Hacker · INE Certified Cloud Associate</div>
                    <div>CCNA v1.7 · CyberOps Associate · EHE / NDE / DFE (EC-Council)</div>
                    <div>PCAP Python · Basic to Advanced Kali Linux (CRAW Security)</div>
                  </div>
                </div>

                {/* Section: Notable engagements */}
                <div>
                  <div className="text-[0.6rem] text-text-muted uppercase tracking-widest mb-2">§ 3.0 NOTABLE ENGAGEMENTS</div>
                  <div className="space-y-1 text-text-secondary">
                    {[
                      { client: 'NPCI',          type: 'PCI DSS v4.0.1 + VAPT',         year: '2024' },
                      { client: 'UIDAI',          type: 'ISO 27001 Audit + Cloud Sec',    year: '2024' },
                      { client: 'Axis Bank',       type: 'Full-scope Web + API VAPT',      year: '2024' },
                      { client: 'Kotak Mahindra',  type: 'API Security Assessment',        year: '2023' },
                      { client: '[REDACTED]',      type: '████ ████ ███ ██ ████',          year: '2024', redact: true },
                    ].map(({ client, type, year, redact }) => (
                      <div key={client} className="flex justify-between">
                        <span>
                          {redact
                            ? <span className="redacted">{client}</span>
                            : <span className="text-white">{client}</span>
                          }
                          {' — '}
                          {redact
                            ? <span className="redacted">{type}</span>
                            : type
                          }
                        </span>
                        <span className="text-text-muted ml-4 shrink-0">{year}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer stamp */}
                <div className="pt-4 border-t border-border flex justify-between items-center">
                  <span className="text-[0.6rem] text-text-muted">
                    DOC_ID: SB-RESUME-2025-v3 · SHA256: 8f2a…d91c
                  </span>
                  <span className="text-[0.6rem] text-green font-bold uppercase tracking-widest">
                    ● INTEGRITY OK
                  </span>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* ── Right: Stats + download CTA ── */}
          <ScrollReveal variants={fadeSlideLeft} className="lg:col-span-5 space-y-6">

            {/* Metric cards */}
            <ScrollReveal variants={containerStagger} className="grid grid-cols-2 gap-4">
              {RESUME_HIGHLIGHTS.map((item) => (
                <ScrollReveal key={item.label} variants={fadeSlideUp}>
                  <GlassCard className="p-4 text-center hover:shadow-[var(--glow-cyan-sm)]">
                    <div className="font-display text-2xl text-cyan font-bold mb-1">
                      {item.value}
                    </div>
                    <div className="font-mono text-[0.6rem] text-text-muted uppercase tracking-widest mb-1">
                      {item.label}
                    </div>
                    <div className="font-body text-[0.7rem] text-text-secondary leading-snug">
                      {item.detail}
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </ScrollReveal>

            {/* Download CTA */}
            <ScrollReveal variants={fadeSlideUp} delay={0.2}>
              <GlassCard className="p-6 border-green/20 hover:shadow-[var(--glow-green-sm)]">
                <div className="font-mono text-[0.65rem] text-text-muted uppercase tracking-widest mb-3">
                  // AUTHORISED DOWNLOAD
                </div>
                <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
                  Full resume with engagement details, methodology notes, and verified credentials.
                  PDF format — ready to forward to your hiring manager.
                </p>

                <CyberButton
                  as="a"
                  href={PERSONAL.resumeUrl}
                  download
                  color="green"
                  className="w-full justify-center"
                  onClick={handleDownload}
                >
                  <span className="flex items-center space-x-2">
                    {downloadStarted ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        <span>DOWNLOADING...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                        </svg>
                        <span>DOWNLOAD_RESUME.pdf</span>
                      </>
                    )}
                  </span>
                </CyberButton>

                {/* Audit trail label */}
                <div className="mt-3 text-center font-mono text-[0.6rem] text-text-muted">
                  Last updated · 2025 · PDF · &lt;2MB
                </div>
              </GlassCard>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
