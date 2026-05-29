"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if booted in this session
    if (sessionStorage.getItem('booted') === 'true') {
      setIsVisible(false);
      return;
    }

    const sequence = async () => {
      await new Promise(r => setTimeout(r, 1500));
      sessionStorage.setItem('booted', 'true');
      setIsVisible(false); // Unmount
    };

    sequence();
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[10000] bg-base flex flex-col items-center justify-center p-8 overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
        aria-live="off"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
           {/* Minimalist Spinner */}
           <motion.div
             animate={{ rotate: 360 }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             className="w-12 h-12 rounded-full border-t-2 border-r-2 border-accent-cyan"
           />
           <span className="font-mono text-sm text-text-muted tracking-widest uppercase">
             Initializing Environment...
           </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
