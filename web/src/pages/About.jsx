import React, { useEffect } from 'react'
import './style/About.css'
import ExperienceItem from './../components/ExperienceItem'
import { experiences } from './../data/experience'
import { FadeIn } from '../components/ui/Animations'
import profilePicture from '../images/profile_picture.JPG'

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
                                I'm Keyur Pawaskar, a full-stack developer passionate about building
                                production-ready applications that solve real problems. Currently pursuing
                                my Master's in Computer Science at California State University, Fresno,
                                I balance academic research with hands-on development work.
                            </p>
                            <p>
                                My journey started with a fascination for how software can transform
                                ideas into impactful solutions. From building survey automation tools
                                at YouGov to developing AI-powered applications at HAV Fresno, I've consistently
                                focused on creating systems that are both powerful and user-friendly.
                            </p>
                            <p>
                                I specialize in React, TypeScript, Python, and FastAPI, with a deep
                                interest in AI safety, behavioral evaluation, and building intelligent
                                systems. When I'm not coding, you'll find me exploring new technologies,
                                contributing to open-source, or working on research projects.
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
                        <p className='education-date'>2023 — Present</p>
                    </div>
                </FadeIn>
            </div>

            <div className="my-experience">
                <FadeIn delay={0.4}>
                    <h2>My Experience<span className='accent'>.</span></h2>
                </FadeIn>
                <FadeIn delay={0.45}>
                    <div className='experience-grid'>
                        {experiences.map((exp, idx) => (
                            <ExperienceItem key={idx} idx={idx} exp={exp} />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}