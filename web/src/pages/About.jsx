import React from 'react'
import './style/About.css'
import ExperienceItem from './../components/ExperienceItem'
import { experiences } from './../data/experience'

export default function About() {
    return (
        <div className='about-page'>
            <div className='about-header'>
                <h1>About me<span className='accent'>.</span></h1>
                <p className='about-lead'>Full‑stack developer turning ideas into production‑ready apps.</p>
            </div>
            <div className='my-story'>
                <h1>My Story<span className='accent'>.</span></h1>
                <p className='my-story-lead'>I am Keyur Pawaskar and this is my story.</p>
            </div>
            <div className="my-experience">
                <h1>My Experience<span className='accent'>.</span></h1>
                <div className='experience-grid'>
                    {experiences.map((exp, idx) => (
                        <ExperienceItem key={idx} idx={idx} exp={exp} />
                    ))}
                </div>
            </div>

        </div>
    )
}