import { useState, useEffect, useCallback } from 'react';

// Throttle function to limit scroll event frequency
const throttle = (func: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastExecTime = 0;
  
  return (...args: any[]) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

export const useScrollSpy = (elementIds: string[], offset: number = 0) => {
  const [activeId, setActiveId] = useState<string>('');

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + offset;
    
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      for (let i = elementIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(elementIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(prevActiveId => {
            // Only update if actually changed to prevent unnecessary re-renders
            return prevActiveId !== elementIds[i] ? elementIds[i] : prevActiveId;
          });
          break;
        }
      }
    });
  }, [elementIds, offset]);

  useEffect(() => {
    // Throttle scroll events to max 60fps (16.67ms)
    const throttledHandleScroll = throttle(handleScroll, 16);
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Call once to set initial active section
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  return activeId;
};