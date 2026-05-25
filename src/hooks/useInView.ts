import { useInView as useObserverInView } from 'react-intersection-observer';

export function useInView(options?: any) {
  const { ref, inView } = useObserverInView({
    threshold: 0.12,
    triggerOnce: true,
    ...options,
  });

  return { ref, isInView: inView };
}