import { motion, AnimatePresence } from 'framer-motion';

// 1. FadeIn - For sections appearing on page load
export const FadeIn = ({ children, delay = 0, duration = 0.5, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// 2. SlideIn - For sidebar/drawer content
export const SlideIn = ({ children, direction = 'left', delay = 0 }) => {
  const x = direction === 'left' ? -20 : 20;
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// 3. ScaleIn - For modals/cards on hover
export const ScaleIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

// 4. StaggerContainer + StaggerItem - For lists
export const StaggerContainer = ({ children, staggerDelay = 0.1, className = '' }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: staggerDelay }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = '' }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// 5. PageTransition - Wrap page content
export const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

// 6. HoverScale - For interactive cards
export const HoverScale = ({ children, scale = 1.02, className = '' }) => (
  <motion.div
    whileHover={{ scale, y: -4 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.2 }}
    className={className}
  >
    {children}
  </motion.div>
);

export { AnimatePresence };
