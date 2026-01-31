import React from 'react'
import './style/About.css'
import ExperienceItem from './../components/ExperienceItem'
import { experiences } from './../data/experience'
import { FadeIn } from '../components/ui/Animations'

export default function About() {
    return (
        <div className='about-page'>
            <div className='about-header'>
                <FadeIn delay={0.1}>
                    <h1>About me<span className='accent'>.</span></h1>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className='about-lead'>Full‑stack developer turning ideas into production‑ready apps.</p>
                </FadeIn>
            </div>
            <div className='my-story'>
                <FadeIn delay={0.3}>
                    <h1>My Story<span className='accent'>.</span></h1>
                </FadeIn>
                <FadeIn delay={0.4}>
                    <p className='my-story-lead'>I am Keyur Pawaskar and this is my story.</p>
                </FadeIn>
            </div>
            <div className="my-experience">
                <FadeIn delay={0.5}>
                    <h1>My Experience<span className='accent'>.</span></h1>
                </FadeIn>
                <FadeIn delay={0.6}>
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