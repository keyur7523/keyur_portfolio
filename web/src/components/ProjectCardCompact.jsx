import './style/ProjectCardCompact.css'
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCardCompact({ project }) {
    const previewTech = project.techStack ? project.techStack.slice(0, 4) : [];

    return (
        <Link
            to={`/projects/${project.name.toLowerCase().replaceAll(' ', '-')}`}
            className='project-card-compact'
        >
            <div className='project-card-compact-image'>
                <img src={project.images[0]} alt={project.name} loading='lazy' decoding='async' />
            </div>
            <div className='project-card-compact-info'>
                <h3 className='project-card-compact-name'>
                    {project.name}
                    <FaExternalLinkAlt className='project-card-compact-icon' />
                </h3>
                {project.summary && (
                    <p className='project-card-compact-summary'>{project.summary}</p>
                )}
                {previewTech.length > 0 && (
                    <div className='project-card-compact-tags'>
                        {previewTech.map(tech => (
                            <span key={tech} className='project-card-compact-tag'>{tech}</span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    )
}
