import { useEffect, useCallback } from 'react';

interface ScrollPerformanceOptions {
  reducedMotion?: boolean;
  targetFPS?: number;
}

export const useScrollPerformance = (options: ScrollPerformanceOptions = {}) => {
  const { reducedMotion = false, targetFPS = 60 } = options;

  const optimizePerformance = useCallback(() => {
    // Disable animations if user prefers reduced motion
    if (reducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--animation-duration', '0ms');
      return;
    }

    // Optimize scroll performance
    const optimizeScrolling = () => {
      // Add performance classes to body
      document.body.classList.add('gpu-accelerated');
      
      // Set will-change property for better performance
      document.documentElement.style.willChange = 'scroll-position';
      
      // Optimize animations based on device capabilities
      const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
      const isSlowConnection = (navigator as any).connection && 
        ((navigator as any).connection.effectiveType === 'slow-2g' || 
         (navigator as any).connection.effectiveType === '2g');

      if (isLowEndDevice || isSlowConnection) {
        document.documentElement.style.setProperty('--animation-duration', '200ms');
        document.documentElement.style.setProperty('--blur-intensity', '8px');
      }
    };

    // Throttle function for performance optimization
    let rafId: number;
    const throttledOptimize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(optimizeScrolling);
    };

    throttledOptimize();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.documentElement.style.removeProperty('--animation-duration');
      document.documentElement.style.removeProperty('--blur-intensity');
      document.documentElement.style.willChange = 'auto';
    };
  }, [reducedMotion, targetFPS]);

  useEffect(() => {
    const cleanup = optimizePerformance();
    
    // Listen for preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => optimizePerformance();
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      cleanup?.();
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [optimizePerformance]);

  return {
    optimizePerformance
  };
}; 