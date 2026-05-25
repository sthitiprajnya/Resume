"use client";
import React from 'react';
import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export const fadeSlideUp: Variants = {
  hidden:  { opacity: 0, y: 80, filter: 'blur(10px)', rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    rotateX: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  },
};

export const fadeSlideLeft: Variants = {
  hidden:  { opacity: 0, x: -100, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
  },
};

export const scaleReveal: Variants = {
  hidden:  { opacity: 0, scale: 0.9, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
  },
};

export const containerStagger: Variants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  },
};

export const cinematicReveal: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
  visible: {
    opacity: 1,
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 1.5, ease: [0.77, 0, 0.175, 1] }
  }
};

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export function ScrollReveal({
  children,
  variants = fadeSlideUp,
  className,
  delay,
  ...props
}: ScrollRevealProps) {
  const { ref, isInView } = useInView();
  const prefersReducedMotion = usePrefersReducedMotion();

  let activeVariants = variants;

  if (delay && activeVariants.visible && typeof activeVariants.visible === 'object' && 'transition' in activeVariants.visible) {
    activeVariants = {
      ...activeVariants,
      visible: {
        ...activeVariants.visible,
        transition: {
          ...activeVariants.visible.transition,
          delay
        }
      }
    };
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      variants={activeVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}