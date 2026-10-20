import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './style/Project.css'
import { useParams, Link } from 'react-router-dom'
import { projectList } from '../data/projectList'
import { LuExternalLink, LuLink } from "react-icons/lu";
import { FaArrowCircleLeft, FaArrowCircleRight, FaGithub } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import TechTile from './TechTile'
import { spring, flickSpring, swipeDirection } from './ui/physics'

// Next slides in from the right and the old one leaves left; previous mirrors it
const slide = {
    enter: ({ dir, w }) => ({ x: dir * w, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: ({ dir, w }) => ({ x: -dir * w, opacity: 0 }),
}

export default function Project() {

    const [[currentIndex, dir], setPage] = useState([0, 0])
    const [flick, setFlick] = useState(0) // release velocity of the last swipe; 0 after a tap or key
    const [copyStatus, setCopyStatus] = useState('')
    const copyTimer = useRef(null)
    const viewportRef = useRef(null)
    const { projectId } = useParams()
    const project = projectList.find(project => project.name.toLowerCase().replaceAll(' ', '-') === projectId)

    useEffect(() => {
        if (project) {
            document.title = `${project.name} | Keyur Pawaskar`
        }
        return () => { document.title = 'Keyur Pawaskar | Software Engineer' }
    }, [project])

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopyStatus('Copied!');
            navigator.vibrate?.(10);
        } catch {
            setCopyStatus("Couldn't copy");
        }
        clearTimeout(copyTimer.current);
        copyTimer.current = setTimeout(() => setCopyStatus(''), 2000);
    };

    const relatedProjects = projectList
        .filter(p => p.name !== project?.name)
        .slice(0, 3);

    if (!project) {
        return <div>Project not found</div>
    }

    const totalImages = project.images.length

    const width = () => viewportRef.current?.offsetWidth ?? 600

    function paginate(d, velocity = 0) {
        setFlick(velocity)
        setPage(([i]) => [(i + d + totalImages) % totalImages, d])
    }
    const next = () => paginate(1)
    const prev = () => paginate(-1)

    function goTo(idx) {
        setFlick(0)
        setPage(([i]) => [idx, Math.sign(idx - i)])
    }

    function onKeyDown(e) {
        if (e.key === 'ArrowRight') { e.preventDefault(); next() }
        if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
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
                        <span className={`copied-tooltip ${copyStatus ? 'show' : ''}`} role="status">{copyStatus}</span>
                    </button>
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className='project-github' aria-label='View source on GitHub'>
                            <FaGithub size={28} />
                        </a>
                    )}
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className='project-open' aria-label='Open live project'>
                            <LuExternalLink size={30} strokeWidth={2.5} />
                        </a>
                    )}
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
            {totalImages > 0 && (
            <div className="project-gallery">
                <div
                    className="project-gallery-viewport"
                    ref={viewportRef}
                    tabIndex={totalImages > 1 ? 0 : undefined}
                    onKeyDown={totalImages > 1 ? onKeyDown : undefined}
                    role="region"
                    aria-roledescription="carousel"
                    aria-label={`${project.name} screenshots`}
                >
                    <AnimatePresence initial={false} custom={{ dir, w: width() }}>
                        <motion.img
                            key={currentIndex}
                            className="project-gallery-img"
                            src={project.images[currentIndex]}
                            alt={`${project.name} screenshot ${currentIndex + 1}`}
                            decoding="async"
                            draggable={false}
                            custom={{ dir, w: width() }}
                            variants={slide}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            // After a flick, the incoming shot carries on at the finger's speed, with a touch of bounce
                            transition={flick ? { x: { ...flickSpring, velocity: flick }, opacity: spring } : undefined}
                            drag={totalImages > 1 ? 'x' : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            dragTransition={{ bounceStiffness: 400, bounceDamping: 40 }}
                            onDragEnd={(e, { offset, velocity }) => {
                                const d = swipeDirection(offset.x, velocity.x, width())
                                if (d) paginate(d, velocity.x)
                            }}
                        />
                    </AnimatePresence>
                    {totalImages > 1 && (
                        <p className="sr-only" aria-live="polite">Screenshot {currentIndex + 1} of {totalImages}</p>
                    )}
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
                                aria-current={i === currentIndex}
                                onClick={() => goTo(i)}
                                aria-label={`Go to image ${i + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
            )}
            <div className="project-description">
                <h2>Description</h2>
                <div className="project-description-points">
                    {project.description?.map((point, i) => (
                        <div className="project-desc-item" key={i}>
                            <SiTicktick className="project-desc-icon" aria-hidden="true" />
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
                        >
                            <div className='related-card-image'>
                                {p.images.length > 0 ? (
                                    <img src={p.images[0]} alt={p.name} loading='lazy' decoding='async' />
                                ) : (
                                    <span className='project-image-placeholder'>$ git clone {p.name.toLowerCase()}</span>
                                )}
                            </div>
                            <span>{p.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}