import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style/Mystory.css';

export default function Mystory() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className='mystory-content'>
            <div className='mystory-paragraph'>
                <p>
                    I'm a full-stack developer, and for the past year I've been building the
                    AI systems that Heart, Artery &amp; Vein Center of Fresno runs on every
                    day — from the idea in a doctor's head to the thing running in production.
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
                            That's included an OpenAI-powered speech-to-text pipeline with a
                            MongoDB-backed correction system, a three-tier AI paraphrasing pass
                            (LangChain + GPT-4 Turbo) that turns a recorded visit into a
                            SOAP-formatted clinical note, and a Chrome extension that automates
                            a legacy, API-less EHR — I reverse-engineered its internals because
                            the vendor said it couldn't be done. The workflow that used to take
                            a clinician 20 minutes now takes 2–3.
                        </p>
                        <p>
                            Before HAV, I spent almost two years at YouGov building survey
                            infrastructure and automation that cut manual coding work from
                            6–20 hours to a single click.
                        </p>
                        <p>
                            Outside work I build AI agents and the evaluation harnesses that
                            check whether they're actually right — not just whether they look
                            right. Koda (Tree-sitter-based code understanding), Delegate (an
                            assistant with real Gmail/Calendar access and a server-side approval
                            layer that holds even if the model doesn't follow instructions).
                        </p>
                        <p>
                            MS in Computer Science, CSU Fresno (3.91 GPA).
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