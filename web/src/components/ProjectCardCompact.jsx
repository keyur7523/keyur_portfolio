import './style/ProjectCardCompact.css'
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCardCompact({ project }) {
    return (
        <Link
            to={`/projects/${project.name.toLowerCase().replace(' ', '-')}`}
            className='project-card-compact'
        >
            <div className='project-card-compact-image'>
                <img src={project.images[0]} alt={project.name} />
            </div>
            <div className='project-card-compact-info'>
                <h3 className='project-card-compact-name'>
                    {project.name}
                    <FaExternalLinkAlt className='project-card-compact-icon' />
                </h3>
            </div>
        </Link>
    )
}
