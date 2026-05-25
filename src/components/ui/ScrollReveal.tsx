import React from 'react';
import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export const fadeSlideUp: Variants = {
  hidden:  { opacity: 0, y: 60, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

export const fadeSlideLeft: Variants = {
  hidden:  { opacity: 0, x: -80, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  },
};

export const scaleReveal: Variants = {
  hidden:  { opacity: 0, scale: 0.85, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  },
};

export const containerStagger: Variants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  },
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