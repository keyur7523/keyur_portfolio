import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 30,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        y: -30,
        transition: {
            duration: 0.25,
            ease: 'easeIn',
        },
    },
};

export default function PageTransition({ children }) {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            {children}
        </motion.div>
    );
}
