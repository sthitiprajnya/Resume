"use client";
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface CursorProviderProps {
  children: React.ReactNode;
}

export function CursorProvider({ children }: CursorProviderProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Custom logic to handle touch detection beyond media queries
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  // Smooth follow state for ring
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId: number;

    const render = () => {
      const { x, y } = mousePos.current;

      // Update dot position directly
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
        dotRef.current.style.opacity = x === 0 && y === 0 ? '0' : '1';
      }

      // Lerp for smooth follow (lag)
      ringPos.current.x += (x - ringPos.current.x) * 0.12;
      ringPos.current.y += (y - ringPos.current.y) * 0.12;

      if (ringRef.current) {
        const scale = isClicking ? '0.5' : isHovering ? '1.5' : '1';
        ringRef.current.style.transform = `translate(calc(${ringPos.current.x}px - 50%), calc(${ringPos.current.y}px - 50%)) scale(${scale})`;
        ringRef.current.style.opacity = x === 0 && y === 0 ? '0' : '1';
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTouchDevice, prefersReducedMotion, isClicking, isHovering]);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over an interactive element
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isTouchDevice]);

  return (
    <>
      {!isTouchDevice && !prefersReducedMotion && (
        <>
          <div
            ref={dotRef}
            className={clsx(
              "custom-cursor-dot",
              isClicking && "scale-75 transition-transform"
            )}
            style={{ opacity: 0 }}
          />
          <div
            ref={ringRef}
            className={clsx(
              "custom-cursor-ring custom-cursor",
              isHovering && "bg-cyan/10 border-transparent backdrop-blur-[2px]"
            )}
            style={{ opacity: 0 }}
          />
        </>
      )}
      {children}
    </>
  );
}
