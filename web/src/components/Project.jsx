import React, { useState, useEffect } from "react";
import './style/Project.css'
import { useParams, Link } from 'react-router-dom'
import { projectList } from '../data/projectList'
import { LuExternalLink, LuLink } from "react-icons/lu";
import { FaArrowCircleLeft, FaArrowCircleRight, FaGithub } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import TechTile from './TechTile'
import { FadeIn } from './ui/Animations'

export default function Project() {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [copied, setCopied] = useState(false)
    const { projectId } = useParams()
    const project = projectList.find(project => project.name.toLowerCase().replaceAll(' ', '-') === projectId)

    useEffect(() => {
        if (project) {
            document.title = `${project.name} | Keyur Pawaskar`
        }
        return () => { document.title = 'Keyur Pawaskar | Software Engineer' }
    }, [project])

    const copyLink = async () => {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const relatedProjects = projectList
        .filter(p => p.name !== project?.name)
        .slice(0, 3);

    if (!project) {
        return <div>Project not found</div>
    }

    const totalImages = project.images.length

    function next() {
        setCurrentIndex(idx =>(
            (idx + 1) % totalImages
        ))
    }

    function prev() {
        setCurrentIndex(idx =>(
            (idx - 1 + totalImages) % totalImages
        ))
    }

    function goTo(idx) {
        setCurrentIndex(idx)
    }

    return (
        <div className='project-page'>
            <Link to='/projects'>
                <FaArrowCircleLeft /> 
                Back
            </Link>
            <div className='project-header'>
                <h1>{project.name}<span className="accent">.</span></h1>
                <div className='project-header-actions'>
                    <button
                        onClick={copyLink}
                        className="project-copy-link"
                        aria-label="Copy link"
                    >
                        <LuLink size={24} />
                        {copied && <span className="copied-tooltip">Copied!</span>}
                    </button>
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className='project-github' aria-label='View source on GitHub'>
                            <FaGithub size={28} />
                        </a>
                    )}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className='project-open' aria-label='Open live project'>
                        <LuExternalLink size={30} strokeWidth={2.5} />
                    </a>
                </div>
            </div>
            <p>{project.summary}</p>
            {project.highlights && (
                <ul className="project-highlights">
                    {project.highlights.map((h, i) => (
                        <li key={i} className="project-highlight-chip">{h}</li>
                    ))}
                </ul>
            )}
            <div className="project-gallery">
                <div className="project-gallery-viewport">
                    <img
                        className="project-gallery-img"
                        src={project.images[currentIndex]}
                        alt={`${project.name} screenshot ${currentIndex + 1}`}
                        decoding="async"
                    />
                    {totalImages > 1 && (
                        <>
                            <button
                                type="button"
                                className="project-gallery-arrow left"
                                onClick={prev}
                                aria-label="Previous Image"
                            >
                                <FaArrowCircleLeft size={30} strokeWidth={2.5} />
                            </button>
                            <button
                                type="button"
                                className="project-gallery-arrow right"
                                onClick={next}
                                aria-label="Next Image"
                            >
                                <FaArrowCircleRight size={30} strokeWidth={2.5} />
                            </button>
                        </>
                    )}
                </div>
                {totalImages > 1 && (
                    <div className="project-gallery-dots">
                        {project.images.map((_, i) => (
                            <button 
                                type="button"
                                key={i}
                                className={`project-gallery-dot ${i === currentIndex ? 'active' : ''}`}
                                onClick={() => goTo(i)}
                                aria-label={`Go to image ${i + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
            <div className="project-description">
                <h2>Description</h2>
                <div className="project-description-points">
                    {project.description?.map((point, i) => (
                        <div className="project-desc-item" key={i}>
                            <SiTicktick className="project-desc-icon" />
                            <p className="project-desc-text">{point}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="project-tech-stack">
                <h2>Tech Stack</h2>
                <div className="tech-grid">
                    {project.techStack.map((t, i) => (
                        <TechTile key={i} tech={t} />
                    ))}
                </div>
            </div>

            <div className="related-projects">
                <h2>More Projects</h2>
                <div className="related-grid">
                    {relatedProjects.map((p, i) => (
                        <Link
                            key={i}
                            to={`/projects/${p.name.toLowerCase().replaceAll(' ', '-')}`}
                            className="related-card"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <img src={p.images[0]} alt={p.name} loading='lazy' decoding='async' />
                            <span>{p.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}