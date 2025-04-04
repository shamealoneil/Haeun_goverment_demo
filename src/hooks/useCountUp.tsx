
import { useState, useEffect } from 'react';

interface UseCountUpProps {
  end: number | string;
  duration?: number;
  start?: number;
  isAnimating: boolean;
}

export function useCountUp({ end, duration = 2000, start = 0, isAnimating }: UseCountUpProps) {
  const [count, setCount] = useState(start);
  
  // Parse the end value to handle different formats
  const processEndValue = () => {
    // Handle percentage or plus sign
    let numericPart = String(end).replace(/[^0-9.]/g, '');
    return numericPart ? Number(numericPart) : null;
  };
  
  const numericEnd = processEndValue();
  const isNumeric = numericEnd !== null;
  
  useEffect(() => {
    // Reset to start when not animating
    if (!isAnimating) {
      setCount(start);
      return;
    }
    
    // For non-numeric values, we don't animate
    if (!isNumeric) {
      return;
    }
    
    // Calculate the increment per frame
    const frameRate = 60; // frames per second
    const totalFrames = Math.ceil(duration / 1000 * frameRate);
    const timePerFrame = 1000 / frameRate;
    const increment = (numericEnd - start) / totalFrames;
    
    let currentCount = start;
    let frameCount = 0;
    
    const timer = setInterval(() => {
      frameCount++;
      
      // Easing function for smoother animation
      const progress = frameCount / totalFrames;
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
      
      currentCount = start + (numericEnd - start) * easedProgress;
      
      if (frameCount >= totalFrames) {
        setCount(numericEnd);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, timePerFrame);
    
    return () => clearInterval(timer);
  }, [isAnimating, start, numericEnd, duration, isNumeric]);
  
  // Function to format the displayed value
  const getDisplayValue = () => {
    if (!isNumeric) return end;
    
    const originalStr = String(end);
    const suffix = originalStr.match(/[^0-9.]+$/)?.[0] || '';
    
    return count + suffix;
  };
  
  return getDisplayValue();
}
