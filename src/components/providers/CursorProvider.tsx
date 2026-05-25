"use client";
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useMousePosition } from '@/hooks/useMousePosition';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface CursorProviderProps {
  children: React.ReactNode;
}

export function CursorProvider({ children }: CursorProviderProps) {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Custom logic to handle touch detection beyond media queries
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const ringRef = useRef<HTMLDivElement>(null);

  // Smooth follow state for ring
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion) return;

    let animationFrameId: number;

    const render = () => {
      // Lerp for smooth follow (lag)
      ringPos.current.x += (x - ringPos.current.x) * 0.12;
      ringPos.current.y += (y - ringPos.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(calc(${ringPos.current.x}px - 50%), calc(${ringPos.current.y}px - 50%)) ${isClicking ? 'scale(0.5)' : isHovering ? 'scale(1.5)' : 'scale(1)'}`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [x, y, isTouchDevice, prefersReducedMotion, isClicking]);

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
            className={clsx(
              "custom-cursor-dot",
              isClicking && "scale-75 transition-transform"
            )}
            style={{
              left: `${x}px`,
              top: `${y}px`,
              opacity: x === 0 && y === 0 ? 0 : 1
            }}
          />
          <div
            ref={ringRef}
            className={clsx(
              "custom-cursor-ring custom-cursor",
              isHovering && "bg-cyan/10 border-transparent backdrop-blur-[2px]"
            )}
            style={{
              opacity: x === 0 && y === 0 ? 0 : 1
            }}
          />
        </>
      )}
      {children}
    </>
  );
}