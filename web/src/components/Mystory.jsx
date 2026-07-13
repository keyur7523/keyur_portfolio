import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style/Mystory.css';

export default function Mystory() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className='mystory-content'>
            <div className='mystory-paragraph'>
                <p>
                    I'm Keyur Pawaskar, a full-stack developer focused on building
                    production-ready applications that solve real problems. I hold an MS in
                    Computer Science from California State University, Fresno (3.91 GPA),
                    and I currently build AI-powered software inside a cardiovascular
                    practice — from speech-to-text clinical pipelines to LLM agents.
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
                            I work with React, TypeScript, Python, and FastAPI, with a focus on
                            AI safety, behavioral evaluation, and building intelligent systems
                            that hold up in production. Outside of shipping features, I spend
                            time reading unfamiliar codebases and sharpening fundamentals.
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