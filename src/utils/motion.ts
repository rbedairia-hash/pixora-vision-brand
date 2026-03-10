import { Variants } from "framer-motion";

// Premium motion system for Pixora website
// Elegant, restrained, and cinematic animations

// Base easing curves for premium feel
export const EASING = {
  smooth: [0.16, 1, 0.3, 1] as const,
  refined: [0.25, 1, 0.5, 1] as const,
  subtle: [0.4, 0, 0.2, 1] as const,
};

// Animation durations
export const DURATION = {
  fast: 0.4,
  standard: 0.7,
  slow: 0.85,
  verySlow: 1.2,
};

// Stagger delays
export const STAGGER = {
  tight: 0.08,
  standard: 0.1,
  relaxed: 0.12,
  wide: 0.15,
};

// Section reveal variants - hierarchical
export const sectionVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 24,
    filter: "blur(2px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: DURATION.standard,
      ease: EASING.smooth,
    }
  }
};

// Eyebrow/label variants - appears first
export const eyebrowVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 16,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: DURATION.fast,
      ease: EASING.refined,
    }
  }
};

// Heading variants - appears after eyebrow
export const headingVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 32,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: DURATION.standard,
      ease: EASING.smooth,
      delay: 0.1
    }
  }
};

// Supporting text variants
export const textVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: DURATION.standard,
      ease: EASING.smooth,
      delay: 0.2
    }
  }
};

// Card variants - appears after text
export const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 28,
    scale: 0.98,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
      delay: 0.3
    }
  }
};

// Staggered card container
export const staggeredContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.standard,
      delayChildren: 0.3,
    }
  }
};

// Individual card in staggered group
export const staggeredCard: Variants = {
  hidden: { 
    opacity: 0, 
    y: 32,
    scale: 0.96,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: DURATION.standard,
      ease: EASING.smooth,
    }
  }
};

// Image reveal variants
export const imageVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 1.03,
    filter: "blur(1px)" 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: DURATION.slow,
      ease: EASING.refined,
    }
  }
};

// Stats number animation
export const statsVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: DURATION.standard,
      ease: EASING.smooth,
    }
  }
};

// CTA button variants
export const ctaVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: DURATION.fast,
      ease: EASING.refined,
      delay: 0.4
    }
  }
};

// Parallax motion values
export const parallaxConfig = {
  // Subtle parallax speeds
  slow: { from: 0, to: 30 },
  medium: { from: 0, to: 60 },
  fast: { from: 0, to: 100 },
  
  // Opacity fade with scroll
  fadeOut: { from: 1, to: 0.4 },
  
  // Scale with scroll
  scaleDown: { from: 1, to: 0.95 },
};

// Direction-based reveals
export const directionVariants = {
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  },
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  }
};

// Combined section animation sequence
export const sectionSequence = {
  eyebrow: eyebrowVariants,
  heading: headingVariants,
  text: textVariants,
  cards: staggeredContainer,
  cta: ctaVariants,
};
