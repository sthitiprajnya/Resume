import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { CyberButton } from '@/components/ui/CyberButton';
import { PERSONAL } from '@/data/portfolio';

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certs', id: 'certifications' },
  { label: 'GitHub', id: 'github' },
  { label: 'Contact', id: 'contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll events for styling and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Determine active section based on scroll position
      const sections = ['hero', ...NAV_LINKS.map(l => l.id)];

      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={clsx(
          "fixed top-0 left-0 w-full h-16 z-50 transition-all duration-300 flex items-center px-4 md:px-8",
          "bg-black/70 backdrop-blur-xl saturate-180",
          scrolled ? "border-b border-[rgba(0,245,255,0.3)]" : "border-b border-[rgba(0,245,255,0.08)]"
        )}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo / Name */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center space-x-2 group focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-4"
          >
            <span className="text-cyan font-mono font-bold">{'>_'}</span>
            <span className="font-display font-bold text-white tracking-widest text-sm md:text-base group-hover:text-cyan transition-colors">
              {PERSONAL.nameShort}
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className={clsx(
                        "relative font-mono text-[0.78rem] uppercase tracking-widest py-2 transition-colors",
                        "focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-4",
                        isActive ? "text-cyan" : "text-text-secondary hover:text-cyan group"
                      )}
                    >
                      {link.label}
                      <span
                        className={clsx(
                          "absolute bottom-0 left-0 h-[1px] bg-cyan transition-transform duration-300 origin-left",
                          isActive ? "w-full scale-x-100 shadow-[var(--glow-cyan-sm)]" : "w-full scale-x-0 group-hover:scale-x-100"
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            <CyberButton
              as="a"
              href={PERSONAL.resumeUrl}
              download
              color="green"
              className="py-2 px-4 text-[0.7rem]"
            >
              <span className="flex items-center">
                DOWNLOAD_CV
                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </CyberButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-cyan p-2 focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-4"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-black border-l border-border flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display font-bold text-white tracking-widest text-sm">
                SYSTEM_MENU
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-cyan p-2"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col space-y-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.08) }}
                >
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={clsx(
                      "font-mono text-xl uppercase tracking-widest text-left w-full",
                      activeSection === link.id ? "text-cyan" : "text-text-secondary"
                    )}
                  >
                    <span className="opacity-50 mr-4 text-sm">// 0{i + 1}</span>
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <CyberButton
                as="a"
                href={PERSONAL.resumeUrl}
                download
                color="green"
                className="w-full"
              >
                DOWNLOAD_CV
              </CyberButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}