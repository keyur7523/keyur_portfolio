import './style/Home.css'
import profilePicture from '../images/profile_picture.JPG'
import ProjectCardCompact from './../components/ProjectCardCompact'
import Experience from './../components/Experience'
import Skills from './../components/Skills'
import Mystory from './../components/Mystory'
import FeaturedProject from './../components/FeaturedProject'
import { projectList } from '../data/projectList'
import { experiences } from '../data/experience.js'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SiTicktick } from "react-icons/si";
import { FaChevronDown, FaChevronUp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FadeIn, Reveal } from '../components/ui/Animations'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
    const navigate = useNavigate()
    const [activeExperience, setActiveExperience] = useState(experiences[0].company);
    const [projectsExpanded, setProjectsExpanded] = useState(false);

    function handleExperienceClick(company) {
        setActiveExperience(company);
    }

    // First project is showcased in the featured spotlight; grid holds the rest
    const featured = projectList[0];
    const visibleProjects = projectsExpanded ? projectList.slice(1) : projectList.slice(1, 3);

    return (
        <div className='home-page'>
            <div className='my-info'>
                <div className='text'>
                    <FadeIn delay={0.1}>
                        <div className='hero-id'>
                            <span className='hero-avatar-frame'>
                                <img
                                    className='hero-avatar'
                                    src={profilePicture}
                                    alt='Keyur Pawaskar'
                                    width='96'
                                    height='96'
                                    fetchPriority='high'
                                />
                            </span>
                            <p className='hero-eyebrow'>~/ keyur — software engineer</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <h1>Building <span className='accent'>AI systems</span><br />that ship.</h1>
                    </FadeIn>
                    <FadeIn delay={0.35}>
                        <p className='hero-subtitle'>
                            I'm Keyur Pawaskar — I build LLM agents, real‑time collaborative tools,
                            and the production infrastructure that keeps them honest.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <p className='hero-status'>
                            <span className='status-dot' aria-hidden='true'></span>
                            open to SWE roles &middot; MS CS @ CSU Fresno &middot; Full Stack Dev @ HAV Fresno
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.5}>
                        <button className='contact-button' onClick={() => navigate('/contact')}>
                            Contact Me
                        </button>
                        <button className='projects-button' onClick={() => navigate('/projects')}>
                            Check Out My Projects
                        </button>
                    </FadeIn>
                    <FadeIn delay={0.6}>
                        <div className='hero-socials'>
                            <a href='https://github.com/keyur7523' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
                                <FaGithub />
                            </a>
                            <a href='https://www.linkedin.com/in/keyur-pawaskar-7b05b6169/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
            <div className='projects-container'>
                <Reveal>
                    <p className='section-eyebrow'>01 &mdash; things I've built</p>
                    <h2 className='projects-title'>Projects<span className='accent'>.</span></h2>
                </Reveal>
                <Reveal delay={0.08}>
                    <FeaturedProject project={featured} />
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
                    <p className='section-eyebrow'>02 &mdash; where I've worked</p>
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
                    <p className='section-eyebrow'>03 &mdash; what I work with</p>
                    <h2 className='skills-title'>Skills<span className='accent'>.</span></h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <Skills key='skills' />
                </Reveal>
            </div>
            <div className='mystory-container'>
                <Reveal>
                    <p className='section-eyebrow'>04 &mdash; how I got here</p>
                    <h2 className='mystory-title'>My Story<span className='accent'>.</span></h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <Mystory key='mystory' />
                </Reveal>
            </div>
        </div>
    )
}