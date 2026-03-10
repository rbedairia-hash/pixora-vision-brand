import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface UseStatsAnimationProps {
  endValue: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export const useStatsAnimation = ({ 
  endValue, 
  duration = 2000, 
  suffix = "", 
  prefix = "" 
}: UseStatsAnimationProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView && count === 0) {
      const startTime = Date.now();
      const animateValue = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * endValue);
        
        setCount(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animateValue);
        }
      };
      
      requestAnimationFrame(animateValue);
      
      // Trigger Framer Motion animation
      controls.start("visible");
    }
  }, [isInView, count, endValue, duration, controls]);

  return {
    count,
    ref,
    controls,
    displayValue: `${prefix}${count}${suffix}`
  };
};
