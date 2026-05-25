import { useInView as useObserverInView } from 'react-intersection-observer';

export function useInView<T extends Element = HTMLDivElement>(options?: any) {
  const { ref, inView } = useObserverInView({
    threshold: 0.12,
    triggerOnce: true,
    ...options,
  });

  return { ref, isInView: inView };
}