'use client';

import React from 'react';
import { Preloader } from '@/components/sections/Preloader';
import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Certifications } from '@/components/sections/Certifications';
import { GitHubStats } from '@/components/sections/GitHubStats';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { CursorProvider } from '@/components/providers/CursorProvider';
import { AudioProvider } from '@/components/providers/AudioProvider';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <>
      <Preloader />

      <AudioProvider>
      <CursorProvider>
        <SmoothScrollProvider>
          <Navigation />

          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <GitHubStats />
            <Contact />
          </main>

          <Footer />
        </SmoothScrollProvider>
      </CursorProvider>
      </AudioProvider>

      {/* Global Toaster for notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'var(--color-surface)',
            color: 'var(--text-primary)',
            border: '1px solid var(--color-border)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            borderRadius: '4px',
          },
          success: {
            iconTheme: {
              primary: 'var(--color-green)',
              secondary: 'black',
            },
            style: {
              borderColor: 'var(--color-green)',
              boxShadow: 'var(--glow-green-sm)',
            }
          },
          error: {
            iconTheme: {
              primary: 'var(--color-red)',
              secondary: 'white',
            },
            style: {
              borderColor: 'var(--color-red)',
              boxShadow: 'var(--glow-red-sm)',
            }
          }
        }}
      />
    </>
  );
}
