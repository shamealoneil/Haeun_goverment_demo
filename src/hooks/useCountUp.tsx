
import { useState, useEffect } from 'react';

interface UseCountUpProps {
  end: number | string;
  duration?: number;
  start?: number;
  isAnimating: boolean;
}

export function useCountUp({ end, duration = 2000, start = 0, isAnimating }: UseCountUpProps) {
  const [count, setCount] = useState(start);
  
  // Handle non-numeric values like "24/7"
  const isNumeric = typeof end === 'number' || /^\d+$/.test(String(end));
  const numericEnd = isNumeric ? Number(end) : 0;
  
  useEffect(() => {
    // Reset to start when not animating
    if (!isAnimating) {
      setCount(start);
      return;
    }
    
    // For non-numeric values, just set the final value
    if (!isNumeric) {
      return;
    }
    
    // Calculate the increment per frame
    const totalFrames = 60;
    const timePerFrame = duration / totalFrames;
    const increment = (numericEnd - start) / totalFrames;
    
    let currentCount = start;
    const timer = setInterval(() => {
      currentCount += increment;
      
      if (
        (increment >= 0 && currentCount >= numericEnd) || 
        (increment < 0 && currentCount <= numericEnd)
      ) {
        setCount(numericEnd);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, timePerFrame);
    
    return () => clearInterval(timer);
  }, [isAnimating, start, numericEnd, duration, isNumeric]);
  
  return isNumeric ? count : end;
}
