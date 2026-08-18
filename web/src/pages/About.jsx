import React, { useEffect } from 'react'
import './style/About.css'
import ExperienceItem from './../components/ExperienceItem'
import { experiences } from './../data/experience'
import { FadeIn } from '../components/ui/Animations'
import profilePicture from '../images/profile_medium.jpg'

export default function About() {
    useEffect(() => {
        document.title = 'About | Keyur Pawaskar'
        return () => { document.title = 'Keyur Pawaskar | Software Engineer' }
    }, [])

    return (
        <div className='about-page'>
            <div className='about-header'>
                <FadeIn delay={0.1}>
                    <h1>About me<span className='accent'>.</span></h1>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className='about-lead'>Building AI‑powered full‑stack applications — from LLM agents to real‑time collaborative tools.</p>
                </FadeIn>
            </div>

            <div className='about-intro'>
                <FadeIn delay={0.25}>
                    <div className='about-intro-content'>
                        <span className='about-photo-frame'>
                            <img src={profilePicture} alt='Keyur Pawaskar' className='about-photo' />
                        </span>
                        <div className='about-intro-text'>
                            <p>
                                I'm Keyur Pawaskar, a full-stack developer. For the past year I've
                                been building the AI systems that Heart, Artery &amp; Vein Center of
                                Fresno runs on every day — from the idea in a doctor's head to the
                                thing running in production. The clinical documentation workflow
                                that used to take 20 minutes now takes 2–3.
                            </p>
                            <p>
                                Before HAV, I spent almost two years at YouGov building survey
                                infrastructure and automation that cut manual coding work from
                                6–20 hours to a single click. I hold an MS in Computer Science
                                from California State University, Fresno (3.91 GPA).
                            </p>
                            <p>
                                Outside work I build AI agents and the evaluation harnesses that
                                check whether they're actually right — not just whether they look
                                right. I work with React, TypeScript, Python, and FastAPI, with a
                                focus on AI safety, behavioral evaluation, and systems that hold
                                up in production.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>

            <div className='about-education'>
                <FadeIn delay={0.3}>
                    <h2>Education<span className='accent'>.</span></h2>
                </FadeIn>
                <FadeIn delay={0.35}>
                    <div className='education-card'>
                        <h3>Master of Science in Computer Science</h3>
                        <p className='education-school'>California State University, Fresno</p>
                        <p className='education-date'>2023 — 2025 · 3.91 / 4.0 GPA</p>
                    </div>
                </FadeIn>
            </div>

            <div className="my-experience">
                <FadeIn delay={0.4}>
                    <h2>My Experience<span className='accent'>.</span></h2>
                </FadeIn>
                <FadeIn delay={0.45}>
                    <div className='about-exp-grid'>
                        {experiences.map((exp, idx) => (
                            <ExperienceItem key={idx} idx={idx} exp={exp} />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}