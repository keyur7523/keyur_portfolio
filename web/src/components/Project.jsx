import React from "react";
import './style/Project.css'
import { useParams, Link } from 'react-router-dom'
import { projectList } from '../data/projectList'
import { LuExternalLink } from "react-icons/lu";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import TechTile from './TechTile'

export default function Project() {

    const [currentIndex, setCurrentIndex] = React.useState(0)
    const { projectId } = useParams()
    const project = projectList.find(project => project.name.toLowerCase().replace(' ', '-') === projectId)

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
                <a href={project.link} target="_blank" rel="noopener noreferrer" className='project-open' aria-label='Open project'>
                    <LuExternalLink size={30} strokeWidth={2.5} />
                </a>
            </div>
            <p>{project.summary}</p>
            <div className="project-gallery">
                <div className="project-gallery-viewport">
                    <img
                        className="project-gallery-img"
                        src={project.images[currentIndex]}
                        alt={`${project.name} screenshot ${currentIndex + 1}`}
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
                <h1>Description</h1>
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
                <h1>Tech Stack</h1>
                <div className="tech-grid">
                    {project.techStack.map((t, i) => (
                        <TechTile key={i} tech={t} />
                    ))}
                </div>
            </div>
        </div>
    )
}