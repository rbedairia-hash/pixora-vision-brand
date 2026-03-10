import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";
import { parallaxConfig } from "@/utils/motion";

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  parallaxSpeed?: "slow" | "medium" | "fast" | null;
  fadeOut?: boolean;
  scaleDown?: boolean;
}

export const MotionSection = ({ 
  children, 
  className = "", 
  parallaxSpeed = null,
  fadeOut = false,
  scaleDown = false
}: MotionSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    parallaxSpeed ? [parallaxConfig[parallaxSpeed].from, parallaxConfig[parallaxSpeed].to] : [0, 0]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    fadeOut ? [parallaxConfig.fadeOut.from, parallaxConfig.fadeOut.to] : [1, 1]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    scaleDown ? [parallaxConfig.scaleDown.from, parallaxConfig.scaleDown.to] : [1, 1]
  );

  return (
    <motion.section
      ref={ref}
      className={className}
      style={{ y, opacity, scale }}
    >
      {children}
    </motion.section>
  );
};

// Wrapper for creating scroll-triggered animations
export const ScrollRevealWrapper = ({ 
  children, 
  className = "",
  variants,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  variants: any;
  delay?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};
