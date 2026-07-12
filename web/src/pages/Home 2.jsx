import './style/Home.css'
import profilePicture from '../images/profile_picture.JPG'
import ProjectCardCompact from './../components/ProjectCardCompact'
import Experience from './../components/Experience'
import Skills from './../components/Skills'
import Mystory from './../components/Mystory'
import { projectList } from '../data/projectList'
import { experiences } from '../data/experience.js'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SiTicktick } from "react-icons/si";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FadeIn, Reveal } from '../components/ui/Animations'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
    const navigate = useNavigate()
    const [activeExperience, setActiveExperience] = useState(experiences[0].company);
    const [projectsExpanded, setProjectsExpanded] = useState(false);

    function handleExperienceClick(company) {
        setActiveExperience(company);
    }

    const visibleProjects = projectsExpanded ? projectList : projectList.slice(0, 2);

    return (
        <div className='home-page'>
            <div className='my-info'>
                <div className='text'>
                    <FadeIn delay={0.1}>
                        <p>Hello, I'm Keyur! </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <h1><span className='accent'>Soft</span>ware<br />Engineer</h1>
                    </FadeIn>
                    <FadeIn delay={0.35}>
                        <p className='hero-subtitle'>
                            Building AI‑powered full‑stack applications — from LLM agents to real‑time collaborative tools.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <p className='hero-status'>MS CS @ CSU Fresno &middot; Full Stack Developer @ HAV Fresno</p>
                    </FadeIn>
                    <FadeIn delay={0.5}>
                        <button className='contact-button' onClick={() => navigate('/contact')}>
                            Contact Me
                        </button>
                        <button className='projects-button' onClick={() => navigate('/projects')}>
                            Check Out My Projects
                        </button>
                    </FadeIn>
                </div>
                <FadeIn delay={0.3} className='image'>
                    <img src={profilePicture} alt='Keyur Pawaskar' width='480' height='480' fetchPriority='high' />
                </FadeIn>
            </div>
            <div className='projects-container'>
                <Reveal>
                    <h2 className='projects-title'>Projects<span className='accent'>.</span></h2>
                </Reveal>
                <div className='projects-grid-compact'>
                    <AnimatePresence mode="wait">
                        {visibleProjects.map((project, idx) => (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                            >
                                <ProjectCardCompact project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
                <button
                    className='projects-expand-btn'
                    onClick={() => setProjectsExpanded(!projectsExpanded)}
                    aria-label={projectsExpanded ? 'Show fewer projects' : 'Show all projects'}
                >
                    {projectsExpanded ? (
                        <>
                            <span>Show Less</span>
                            <FaChevronUp />
                        </>
                    ) : (
                        <>
                            <span>View All Projects</span>
                            <FaChevronDown />
                        </>
                    )}
                </button>
            </div>
            
            <div className='experience-container'>
                <Reveal>
                    <h2 className='experience-title'>Experience<span className='accent'>.</span></h2>
                </Reveal>
                <Reveal delay={0.1}>
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
                                    <React.Fragment key={experience.company}>
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
                                    </React.Fragment>
                                )
                            }
                        })}
                    </div>
                </div>
                </Reveal>
            </div>
            <div className='skills-container'>
                <Reveal>
                    <h2 className='skills-title'>Skills<span className='accent'>.</span></h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <Skills key='skills' />
                </Reveal>
            </div>
            <div className='mystory-container'>
                <Reveal>
                    <h2 className='mystory-title'>My Story<span className='accent'>.</span></h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <Mystory key='mystory' />
                </Reveal>
            </div>
        </div>
    )
}