// Framer Motion animation presets for consistent animations across the site

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

// Helper function to create delayed animations
export const delayedAnimation = (baseAnimation, delay) => ({
  ...baseAnimation,
  transition: { ...baseAnimation.transition, delay }
});

// Stagger children animation
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Button hover animations
export const buttonHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

// Card hover animations
export const cardHover = {
  whileHover: { scale: 1.02, transition: { duration: 0.3 } }
};

// Scroll indicator animation
export const scrollIndicator = {
  animate: { y: [0, 10, 0] },
  transition: { duration: 1.5, repeat: Infinity }
};

// View-based animations (for useInView hook)
export const viewportAnimation = {
  once: true,
  margin: '-100px'
};
