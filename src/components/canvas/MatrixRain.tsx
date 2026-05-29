"use client";
import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface MatrixRainProps {
  className?: string;
  opacity?: number;
}

export default function MatrixRain({ className, opacity = 0.055 }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0 });
  const prefersReducedMotion = usePrefersReducedMotion();

  // Combine refs for the canvas element
  const setRefs = (node: HTMLCanvasElement | null) => {
    canvasRef.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion || !inView) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width: number;
    let height: number;

    // Matrix characters: katakana + numerals + security symbols
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0x&&||>><<';
    const charArray = chars.split('');

    const fontSize = 18;
    let columns: number;
    let drops: Float32Array;
    let speeds: Float32Array;
    let xPositions: Float32Array;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);

      drops = new Float32Array(columns);
      speeds = new Float32Array(columns);
      xPositions = new Float32Array(columns);

      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100; // Start at random negative y positions
        speeds[i] = 0.3 + Math.random() * 0.6; // Speed between 0.3 and 0.9
        xPositions[i] = i * fontSize;
      }
    };

    window.addEventListener('resize', resize);
    resize();

    ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#00F5FF'; // Cyan text

      const len = drops.length;
      const charsLen = charArray.length;

      for (let i = 0; i < len; i++) {
        // Draw character
        // BOLT: Hoisting charArray.length lookup
        const text = charArray[Math.floor(Math.random() * charsLen)];

        // BOLT: Caching y coordinate and using pre-calculated xPositions
        const y = drops[i] * fontSize;
        ctx.fillText(text, xPositions[i], y);

        // Reset drop if at bottom or randomly
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
          speeds[i] = 0.3 + Math.random() * 0.6; // Reset speed randomly
        }

        // Move drop
        drops[i] += speeds[i];
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion, inView]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <canvas
      ref={setRefs}
      className={clsx("absolute inset-0 pointer-events-none z-0", className)}
      style={{ opacity }}
    />
  );
}