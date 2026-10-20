import { motion, useScroll } from 'framer-motion';
import './style/ScrollProgress.css';

// Tracks scroll 1:1 on the compositor (scaleX), with no React re-render per scroll event
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="scroll-progress-container" aria-hidden="true">
      <motion.div className="scroll-progress-bar" style={{ scaleX: scrollYProgress }} />
    </div>
  );
}
