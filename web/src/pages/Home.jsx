import './style/Home.css'
import profilePicture from '../images/profile_picture.JPG'
import Projects from './../components/Projects'
import Experience from './../components/Experience'
import Skills from './../components/Skills'
import Mystory from './../components/Mystory'
import { projectList } from '../data/projectList'
import { experiences } from '../data/experience.js'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SiTicktick } from "react-icons/si";
import Footer from './../components/Footer'

export default function Home() {
    const navigate = useNavigate()
    const [activeExperience, setActiveExperience] = useState(experiences[0].company);

    function handleExperienceClick(company) {
        setActiveExperience(company);
    }

    return (
        <div className='home-page'>
            <div className='my-info'>
                <div className='text'>
                    <p>Hello, I'm Keyur! </p>
                    <h1><span className='accent'>Soft</span>ware</h1>
                    <h1>Engineer</h1>
                    <p>
                        Full‑stack developer turning ideas into production‑ready apps.
                    </p>
                    <button className='contact-button' onClick={() => navigate('/contact')}>
                        Contact Me
                    </button>
                    <button className='projects-button' onClick={() => navigate('/projects')}>
                        Check Out My Projects
                    </button>
                </div>
                <div className='image'>
                    <img src={profilePicture} alt='Profile picture' />
                </div>
            </div>
            <div className='projects-container'>
                <h1 className='projects-title'>Projects<span className='accent'>.</span></h1>
                <div className='projects-grid'>
                    {projectList.map((project, idx) => {
                        return (
                            <Projects key={idx} project={project} />
                        )
                    })}
                </div>    
            </div>
            
            <div className='experience-container'>
                <h1 className='experience-title'>Experience<span className='accent'>.</span></h1>
                <div className='experience-grid'>
                    <div className='experience-buttons-card'>
                        {experiences.map((experience, idx) => {
                            return (
                                <Experience key={idx} experience={experience} handleExperienceClick={handleExperienceClick} activeExperience={activeExperience} />
                            )
                        })}
                    </div>
                    <div className='experience-details'>
                        {experiences.map(experience => {
                            if (experience.company === activeExperience) {
                                return (
                                    <>
                                        <div className='position-company'>
                                            {experience.position} <span className='accent'>@ {experience.company}</span>
                                        </div>
                                        <div className='duration'>
                                            {experience.duration}
                                        </div>
                                        <div className='description'>
                                            {experience.description.map((desc, i) => (
                                                <div className='description-item' key={i}>
                                                    <SiTicktick className='description-icon' />
                                                    <p className='description-text'>{desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
            <div className='skills-container'> 
                <h1 className='skills-title'>Skills<span className='accent'>.</span></h1>
                <Skills key='skills' />
            </div>
            <div className='mystory-container'>
                <h1 className='mystory-title'>My Story<span className='accent'>.</span></h1>
                <Mystory key='mystory' />  
            </div>
        </div>
    )
}