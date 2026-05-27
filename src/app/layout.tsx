import type { Metadata, Viewport } from 'next';
import '@/index.css';
import '@/animations.css';

export const metadata: Metadata = {
  title: 'Sthitaprajna Biswal — Cybersecurity & Cloud Security Engineer',
  description: 'Sthitaprajna Biswal is an Information Security Engineer and Penetration Tester at iServeU Technology with 2+ years delivering measurable risk reduction.',
  keywords: 'Sthitaprajna Biswal, Sthitaprajna, cybersecurity engineer, penetration tester, VAPT, AppSec, cloud security, GCP security, AWS security, Burp Suite, Kali Linux, application security, Bhubaneswar, India, iServeU',
  authors: [{ name: 'Sthitaprajna Biswal' }],
  robots: 'index, follow, max-image-preview:large',
  alternates: {
    canonical: 'https://sthitiprajnya.github.io/portfolio/',
  },
  openGraph: {
    type: 'website',
    url: 'https://sthitiprajnya.github.io/portfolio/',
    title: 'Sthitaprajna Biswal — Cybersecurity & Cloud Security Engineer',
    description: 'Information Security Engineer with 2+ years in application VAPT, cloud security, and red team operations for major Indian FinTech and banking clients.',
    siteName: 'Sthitaprajna Biswal Portfolio',
    images: [{
      url: 'https://sthitiprajnya.github.io/portfolio/og-image.png',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sthitaprajna Biswal — Cybersecurity Engineer',
    description: '50+ pen tests · 230+ vulnerabilities · NPCI · UIDAI · Axis Bank · Kotak Mahindra',
    images: ['https://sthitiprajnya.github.io/portfolio/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#00F5FF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://github-readme-stats.vercel.app https://streak-stats.demolab.com https://images.unsplash.com; connect-src 'self' https://api.github.com https://api.emailjs.com;"
        />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
