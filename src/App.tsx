import React from 'react';
import { Helmet } from 'react-helmet-async';
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
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Preloader />

      <CursorProvider>
        <Helmet>
            <script type="application/ld+json">{JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sthitaprajna Biswal",
              "url": "https://sthitiprajnya.github.io",
              "image": "https://sthitiprajnya.github.io/images/profile/sthitaprajna.webp",
              "jobTitle": "Information Security Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "iServeU Technology Pvt. Ltd."
              },
              "description": "Cybersecurity and Application VAPT specialist with 2+ years delivering penetration testing, cloud security, and compliance audits for FinTech and banking clients.",
              "knowsAbout": [
                "Application VAPT", "Penetration Testing", "Cloud Security",
                "GCP Security", "AWS Security", "Kubernetes Security",
                "PCI DSS", "ISO 27001", "OWASP Top 10", "Burp Suite",
                "Python", "Security Automation", "Red Team"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Veer Surendra Sai University of Technology (VSSUT)"
              },
              "sameAs": [
                "https://github.com/sthitiprajnya",
                "https://linkedin.com/in/sthitaprajnabiswal"
              ]
            })}</script>
          </Helmet>
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

export default App;