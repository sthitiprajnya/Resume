import { useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';

export function useCardTilt() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(x, { stiffness: 250, damping: 28 });
  const rotateY = useSpring(y, { stiffness: 250, damping: 28 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rect: DOMRect | null = null;

    const updateRect = () => {
      rect = el.getBoundingClientRect();
    };

    const handleMouseEnter = () => {
      updateRect();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!rect) updateRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const px = e.clientX - centerX;
      const py = e.clientY - centerY;

      // Max rotation: ±10 degrees
      const rx = (py / (rect.height / 2)) * -10;
      const ry = (px / (rect.width / 2)) * 10;

      x.set(rx);
      y.set(ry);

      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);

      el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    const handleMouseLeave = () => {
      rect = null;
      x.set(0);
      y.set(0);
      el.style.setProperty('--mouse-x', `-1000px`);
      el.style.setProperty('--mouse-y', `-1000px`);
    };

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect, { passive: true });

    return () => {
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
    };
  }, [x, y, mouseX, mouseY]);

  return { ref, rotateX, rotateY };
}