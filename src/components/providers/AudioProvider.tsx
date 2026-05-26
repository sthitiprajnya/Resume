"use client";
import { useEffect, useCallback, useRef } from 'react';
import { Howl, Howler } from 'howler';
import { useAudioStore } from '@/store/audioStore';

// We'll use synth-generated beeps/boops as fallbacks if real audio files aren't present
// This ensures the cinematic feel works "out of the box" even without assets
const generateSynthBeep = (freq: number, duration: number, vol = 0.1) => {
  if (typeof window === 'undefined') return () => {};

  return () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(vol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Ignore audio context errors (often due to lack of user interaction)
    }
  };
};

export const playHoverSound = generateSynthBeep(800, 0.1, 0.05);
export const playClickSound = generateSynthBeep(1200, 0.15, 0.1);
export const playGlitchSound = generateSynthBeep(150, 0.3, 0.2);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const isMuted = useAudioStore((state) => state.isMuted);

  useEffect(() => {
    Howler.mute(isMuted);
  }, [isMuted]);

  // Attach global hover/click listeners for interactive elements
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        if (!useAudioStore.getState().isMuted) {
          playHoverSound();
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (
          target.tagName.toLowerCase() === 'a' ||
          target.tagName.toLowerCase() === 'button' ||
          target.closest('button') ||
          target.closest('a')
        ) {
          if (!useAudioStore.getState().isMuted) {
            playClickSound();
          }
        }
    }

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return <>{children}</>;
}
