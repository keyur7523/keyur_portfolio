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
                                I'm Keyur Pawaskar, a full-stack developer focused on building
                                production-ready applications that solve real problems. I hold an MS in
                                Computer Science from California State University, Fresno (3.91 GPA),
                                and I currently build AI-powered software inside a cardiovascular
                                practice — from speech-to-text clinical pipelines to LLM agents.
                            </p>
                            <p>
                                My journey started with a fascination for how software can transform
                                ideas into impactful solutions. From building survey automation tools
                                at YouGov to developing AI-powered applications at HAV Fresno, I've consistently
                                focused on creating systems that are both powerful and user-friendly.
                            </p>
                            <p>
                                I work with React, TypeScript, Python, and FastAPI, with a focus on
                                AI safety, behavioral evaluation, and building intelligent systems
                                that hold up in production. Outside of shipping features, I spend
                                time reading unfamiliar codebases and sharpening fundamentals.
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