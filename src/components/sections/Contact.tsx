import React, { useState } from 'react';
import clsx from 'clsx';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard } from '@/components/ui/GlassCard';
import { CyberButton } from '@/components/ui/CyberButton';
import { ScrollReveal, fadeSlideUp, fadeSlideLeft } from '@/components/ui/ScrollReveal';
import { sendContactEmail } from '@/lib/emailjs';
import { PERSONAL } from '@/data/portfolio';

export function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
    _honeypot: '', // Hidden field to catch bots
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.from_name.trim()) newErrors.from_name = 'Name is required';
    if (!formData.from_email.trim()) {
      newErrors.from_email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
      newErrors.from_email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = () => {
    validate();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData._honeypot) {
      // Fake success for bots
      setStatus('success');
      setFormData({ from_name: '', from_email: '', subject: '', message: '', _honeypot: '' });
      return;
    }

    if (!validate()) return;

    setStatus('submitting');

    try {
      await sendContactEmail({
        from_name: formData.from_name,
        from_email: formData.from_email,
        subject: formData.subject || 'Portfolio Contact',
        message: formData.message,
      });

      setStatus('success');
      setFormData({ from_name: '', from_email: '', subject: '', message: '', _honeypot: '' });

      // Track event if analytics is present
      if (typeof window !== 'undefined' && (window as any).umami) {
        (window as any).umami.track('contact_submitted');
      }

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-deep relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle number="07" title="Let's Talk." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column - Contact Info */}
          <ScrollReveal variants={fadeSlideUp} className="space-y-6">

            <GlassCard className="p-6 flex items-center space-x-4">
              <div className="w-12 h-12 rounded bg-cyan-ghost border border-cyan/30 flex items-center justify-center text-cyan">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <div className="font-mono text-[0.65rem] text-text-muted uppercase tracking-widest mb-1">Email</div>
                <a href={`mailto:${PERSONAL.email}`} className="font-body text-text-primary hover:text-cyan transition-colors">
                  {PERSONAL.email}
                </a>
              </div>
            </GlassCard>

            <GlassCard className="p-6 flex items-center space-x-4">
              <div className="w-12 h-12 rounded bg-[rgba(191,0,255,0.1)] border border-violet/30 flex items-center justify-center text-violet">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </div>
              <div>
                <div className="font-mono text-[0.65rem] text-text-muted uppercase tracking-widest mb-1">LinkedIn</div>
                <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="font-body text-text-primary hover:text-violet transition-colors">
                  {PERSONAL.linkedin.replace('https://', '')}
                </a>
              </div>
            </GlassCard>

            <GlassCard className="p-6 flex items-center space-x-4">
              <div className="w-12 h-12 rounded bg-surface border border-border flex items-center justify-center text-text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <div className="font-mono text-[0.65rem] text-text-muted uppercase tracking-widest mb-1">Location</div>
                <div className="font-body text-text-primary">
                  {PERSONAL.location} <span className="text-text-secondary text-sm">(Open to Remote)</span>
                </div>
              </div>
            </GlassCard>

            {PERSONAL.availability && (
              <div className="pt-4 flex items-center space-x-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
                </span>
                <span className="font-mono text-[0.7rem] text-green uppercase tracking-widest">
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
            )}

          </ScrollReveal>

          {/* Right Column - Form */}
          <ScrollReveal variants={fadeSlideLeft}>
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Honeypot */}
              <div style={{ position: "absolute", left: "-9999px", opacity: 0 }} aria-hidden="true">
                <input
                  type="text"
                  name="_honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData._honeypot}
                  onChange={handleChange}
                />
              </div>

              <div className="relative group">
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  onBlur={() => handleBlur()}
                  className={clsx(
                    "w-full bg-[#020408] border rounded-md px-4 py-4 pt-6 text-text-primary outline-none transition-all peer",
                    errors.from_name
                      ? "border-red shadow-[var(--glow-red-sm)]"
                      : "border-border focus:border-cyan focus:shadow-[var(--glow-cyan-sm)]"
                  )}
                  placeholder=" "
                />
                <label
                  htmlFor="from_name"
                  className={clsx(
                    "absolute left-4 top-4 text-text-muted transition-all duration-200 pointer-events-none font-mono text-xs uppercase tracking-widest",
                    "peer-focus:top-2 peer-focus:text-[0.6rem] peer-focus:text-cyan",
                    formData.from_name && "top-2 text-[0.6rem] text-text-secondary"
                  )}
                >
                  Name
                </label>
                {errors.from_name && <span className="absolute -bottom-5 left-0 font-mono text-[0.65rem] text-red">{errors.from_name}</span>}
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  onBlur={() => handleBlur()}
                  className={clsx(
                    "w-full bg-[#020408] border rounded-md px-4 py-4 pt-6 text-text-primary outline-none transition-all peer",
                    errors.from_email
                      ? "border-red shadow-[var(--glow-red-sm)]"
                      : "border-border focus:border-cyan focus:shadow-[var(--glow-cyan-sm)]"
                  )}
                  placeholder=" "
                />
                <label
                  htmlFor="from_email"
                  className={clsx(
                    "absolute left-4 top-4 text-text-muted transition-all duration-200 pointer-events-none font-mono text-xs uppercase tracking-widest",
                    "peer-focus:top-2 peer-focus:text-[0.6rem] peer-focus:text-cyan",
                    formData.from_email && "top-2 text-[0.6rem] text-text-secondary"
                  )}
                >
                  Email
                </label>
                {errors.from_email && <span className="absolute -bottom-5 left-0 font-mono text-[0.65rem] text-red">{errors.from_email}</span>}
              </div>

              <div className="relative group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={clsx(
                    "w-full bg-[#020408] border rounded-md px-4 py-4 pt-6 text-text-primary outline-none transition-all peer border-border focus:border-cyan focus:shadow-[var(--glow-cyan-sm)]"
                  )}
                  placeholder=" "
                />
                <label
                  htmlFor="subject"
                  className={clsx(
                    "absolute left-4 top-4 text-text-muted transition-all duration-200 pointer-events-none font-mono text-xs uppercase tracking-widest",
                    "peer-focus:top-2 peer-focus:text-[0.6rem] peer-focus:text-cyan",
                    formData.subject && "top-2 text-[0.6rem] text-text-secondary"
                  )}
                >
                  Subject (Optional)
                </label>
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur()}
                  className={clsx(
                    "w-full bg-[#020408] border rounded-md px-4 py-4 pt-6 text-text-primary outline-none transition-all peer min-h-[140px] resize-y",
                    errors.message
                      ? "border-red shadow-[var(--glow-red-sm)]"
                      : "border-border focus:border-cyan focus:shadow-[var(--glow-cyan-sm)]"
                  )}
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className={clsx(
                    "absolute left-4 top-4 text-text-muted transition-all duration-200 pointer-events-none font-mono text-xs uppercase tracking-widest",
                    "peer-focus:top-2 peer-focus:text-[0.6rem] peer-focus:text-cyan",
                    formData.message && "top-2 text-[0.6rem] text-text-secondary"
                  )}
                >
                  Message
                </label>
                {errors.message && <span className="absolute -bottom-5 left-0 font-mono text-[0.65rem] text-red">{errors.message}</span>}
              </div>

              <CyberButton
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                color={status === 'success' ? 'green' : 'cyan'}
                className={clsx("w-full mt-4", status === 'error' && "border-red text-red hover:bg-red")}
              >
                {status === 'idle' && 'TRANSMIT_MESSAGE'}
                {status === 'submitting' && (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    TRANSMITTING...
                  </span>
                )}
                {status === 'success' && 'MESSAGE_SENT ✓'}
                {status === 'error' && 'TRANSMISSION_FAILED — RETRY'}
              </CyberButton>

            </form>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}