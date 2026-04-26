import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

export function RevealOnScroll({ children, className = '', animation = 'animate-slide-up', delay = '' }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ${
        isVisible ? `opacity-100 ${animation}` : 'opacity-0 translate-y-8'
      }`}
      style={delay ? { animationDelay: delay } : {}}
    >
      {children}
    </div>
  );
}
