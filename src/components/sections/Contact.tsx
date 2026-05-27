"use client";
import React, { useState } from 'react';
import clsx from 'clsx';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard }    from '@/components/ui/GlassCard';
import { CyberButton }  from '@/components/ui/CyberButton';
import { ScrollReveal, fadeSlideUp, fadeSlideLeft } from '@/components/ui/ScrollReveal';
import { PERSONAL } from '@/data/portfolio';

type Status = 'idle' | 'transmitting' | 'sent' | 'error';

import emailjs from '@emailjs/browser';

// This form uses EmailJS to send emails directly from the browser.
export function Contact() {
  const [form, setForm] = useState({
    from_name:  '',
    from_email: '',
    subject:    '',
    message:    '',
  });

  const [errors, setErrors]   = useState<Partial<typeof form>>({});
  const [status, setStatus]   = useState<Status>('idle');

  const validate = (): boolean => {
    const errs: Partial<typeof form> = {};
    if (!form.from_name.trim())  errs.from_name  = 'Name is required';
    if (!form.from_email.trim()) {
      errs.from_email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email)) {
      errs.from_email = 'Invalid email format';
    }
    if (!form.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof form]) {
      setErrors(prev => { const n = { ...prev }; delete n[name as keyof typeof form]; return n; });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('transmitting');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS environment variables are missing.");
        setStatus('error');
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.from_name,
          from_email: form.from_email,
          subject: form.subject || 'Portfolio Contact',
          message: form.message,
        },
        publicKey
      );

      setStatus('sent');
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-deep relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle number="09" title="Let's Talk." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ── Left: contact info cards ── */}
          <ScrollReveal variants={fadeSlideUp} className="space-y-6">

            <GlassCard className="p-6 flex items-center space-x-4 hover:shadow-[var(--glow-cyan-sm)]">
              <div className="w-12 h-12 rounded bg-cyan-ghost border border-cyan/30 flex items-center justify-center text-cyan shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <div className="font-mono text-[0.65rem] text-text-muted uppercase tracking-widest mb-1">Email</div>
                <a href={`mailto:${PERSONAL.email}`} className="font-body text-text-primary hover:text-cyan transition-colors">
                  {PERSONAL.email}
                </a>
              </div>
            </GlassCard>

            <GlassCard className="p-6 flex items-center space-x-4 hover:shadow-[var(--glow-violet-sm)]">
              <div className="w-12 h-12 rounded bg-[rgba(191,0,255,0.1)] border border-violet/30 flex items-center justify-center text-violet shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <div className="font-mono text-[0.65rem] text-text-muted uppercase tracking-widest mb-1">LinkedIn</div>
                <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
                   className="font-body text-text-primary hover:text-violet transition-colors">
                  {PERSONAL.linkedin.replace('https://', '')}
                </a>
              </div>
            </GlassCard>

            <GlassCard className="p-6 flex items-center space-x-4">
              <div className="w-12 h-12 rounded bg-surface border border-border flex items-center justify-center text-text-primary shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <div className="font-mono text-[0.65rem] text-text-muted uppercase tracking-widest mb-1">Location</div>
                <div className="font-body text-text-primary">
                  {PERSONAL.location}{' '}
                  <span className="text-text-secondary text-sm">(Open to Remote)</span>
                </div>
              </div>
            </GlassCard>

            {/* Availability indicator */}
            <div className="flex items-center space-x-3 pt-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green" />
              </span>
              <span className="font-mono text-[0.7rem] text-green uppercase tracking-widest">
                OPEN TO OPPORTUNITIES
              </span>
            </div>

          </ScrollReveal>

          {/* ── Right: form ── */}
          <ScrollReveal variants={fadeSlideLeft}>
            <form onSubmit={handleSubmit} noValidate className="space-y-6">

              {/* Success overlay */}
              {status === 'sent' && (
                <div className="p-4 border border-green/50 rounded-md bg-green-ghost">
                  <div className="font-mono text-sm text-green font-bold mb-1">
                    ✓ TRANSMISSION_SUCCESSFUL
                  </div>
                  <div className="font-mono text-[0.7rem] text-text-secondary">
                    Your message has been securely delivered. I will respond shortly.
                  </div>
                </div>
              )}

              <FloatingInput id="from_name"  name="from_name"  type="text"  label="Name"             value={form.from_name}  onChange={handleChange} error={errors.from_name}  required />
              <FloatingInput id="from_email" name="from_email" type="email" label="Email"            value={form.from_email} onChange={handleChange} error={errors.from_email} required />
              <FloatingInput id="subject"    name="subject"    type="text"  label="Subject (optional)" value={form.subject}   onChange={handleChange} />
              <FloatingTextarea id="message" name="message" label="Message" value={form.message} onChange={handleChange} error={errors.message} required />

              <CyberButton
                type="submit"
                disabled={status === 'transmitting' || status === 'sent'}
                color={status === 'error' ? 'cyan' : status === 'sent' ? 'green' : 'cyan'}
                className={clsx(
                  'w-full mt-4',
                  status === 'error' && 'border-red text-red hover:bg-red'
                )}
              >
                {status === 'idle'         && 'TRANSMIT_MESSAGE'}
                {status === 'transmitting' && (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    PREPARING_TRANSMISSION...
                  </span>
                )}
                {status === 'sent'         && 'MESSAGE_DELIVERED ✓'}
                {status === 'error'        && 'RETRY_TRANSMISSION'}
              </CyberButton>
            </form>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

// ── Reusable floating-label input ─────────────────────────────

interface FloatingInputProps {
  id: string; name: string; type: string; label: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; required?: boolean;
}

function FloatingInput({ id, name, type, label, value, onChange, error, required }: FloatingInputProps) {
  return (
    <div className="relative">
      <input
        id={id} name={name} type={type} value={value} onChange={onChange}
        required={required}
        aria-required={required} aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        placeholder=" "
        className={clsx(
          'w-full bg-[#020408] border rounded-md px-4 py-4 pt-6 text-text-primary outline-none transition-all peer',
          error
            ? 'border-red shadow-[var(--glow-red-sm)]'
            : 'border-border focus:border-cyan focus:shadow-[var(--glow-cyan-sm)]'
        )}
      />
      <label
        htmlFor={id}
        className={clsx(
          'absolute left-4 top-4 text-text-muted transition-all duration-200 pointer-events-none font-mono text-xs uppercase tracking-widest',
          'peer-focus:top-2 peer-focus:text-[0.6rem] peer-focus:text-cyan',
          value && 'top-2 text-[0.6rem] text-text-secondary'
        )}
      >
        {label}
      </label>
      {error && (
        <span id={`${id}-error`} aria-live="polite" className="absolute -bottom-5 left-0 font-mono text-[0.65rem] text-red">
          {error}
        </span>
      )}
    </div>
  );
}

interface FloatingTextareaProps {
  id: string; name: string; label: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string; required?: boolean;
}

function FloatingTextarea({ id, name, label, value, onChange, error, required }: FloatingTextareaProps) {
  return (
    <div className="relative">
      <textarea
        id={id} name={name} value={value} onChange={onChange}
        required={required}
        aria-required={required} aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        placeholder=" "
        className={clsx(
          'w-full bg-[#020408] border rounded-md px-4 py-4 pt-6 text-text-primary outline-none transition-all peer min-h-[140px] resize-y',
          error
            ? 'border-red shadow-[var(--glow-red-sm)]'
            : 'border-border focus:border-cyan focus:shadow-[var(--glow-cyan-sm)]'
        )}
      />
      <label
        htmlFor={id}
        className={clsx(
          'absolute left-4 top-4 text-text-muted transition-all duration-200 pointer-events-none font-mono text-xs uppercase tracking-widest',
          'peer-focus:top-2 peer-focus:text-[0.6rem] peer-focus:text-cyan',
          value && 'top-2 text-[0.6rem] text-text-secondary'
        )}
      >
        {label}
      </label>
      {error && (
        <span id={`${id}-error`} aria-live="polite" className="absolute -bottom-5 left-0 font-mono text-[0.65rem] text-red">
          {error}
        </span>
      )}
    </div>
  );
}
