import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style/Mystory.css';

export default function Mystory() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className='mystory-content'>
            <div className='mystory-paragraph'>
                <p>
                    I'm Keyur Pawaskar, a full-stack developer passionate about building
                    production-ready applications that solve real problems. Currently pursuing
                    my Master's in Computer Science at California State University, Fresno,
                    I balance academic research with hands-on development work.
                </p>
            </div>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='mystory-expanded'
                    >
                        <p>
                            My journey started with a fascination for how software can transform
                            ideas into impactful solutions. From building survey automation tools
                            at YouGov to developing AI-powered applications, I've consistently
                            focused on creating systems that are both powerful and user-friendly.
                        </p>
                        <p>
                            I specialize in React, TypeScript, Python, and FastAPI, with a deep
                            interest in AI safety, behavioral evaluation, and building intelligent
                            systems. When I'm not coding, you'll find me exploring new technologies,
                            contributing to open-source, or working on research projects.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                className='mystory-toggle'
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? 'Show Less' : 'Read More'}
            </button>
        </div>
    );
}