import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { CursorProvider } from "@/components/providers/CursorProvider";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import "../index.css";

import { Preloader } from "@/components/sections/Preloader";

export const metadata: Metadata = {
  title: "Sthitaprajna Biswal | Enterprise Security Architect",
  description: "Portfolio of Sthitaprajna Biswal, specializing in Enterprise Infrastructure Security, Cloud Hardening, and Agentic AI Automation workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-base text-text-primary antialiased font-primary selection:bg-accent-cyan/30">
        <CursorProvider>
          <Preloader />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </CursorProvider>
      </body>
    </html>
  );
}
