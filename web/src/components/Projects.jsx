import './style/Projects.css'
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";


export default function Projects(props) {
    const { project } = props;
    return (

        <>
            <div className={`project-card project-${project.name.toLowerCase().replaceAll(' ', '-')}`}>
                <div className='project-images'>
                    <img className='project-image' src={project.images[0]} alt={project.name} loading='lazy' decoding='async' />
                </div>
                <div className='project-name-link'></div>
                    <h3 className='project-name'>
                        {project.name}
                        <Link
                            to={`/projects/${project.name.toLowerCase().replaceAll(' ', '-')}`}
                            className='project-link'>
                                <FaExternalLinkAlt />
                        </Link>
                        {project.github && (
                            <a
                                href={project.github}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='project-link project-github-link'
                                aria-label={`${project.name} source on GitHub`}>
                                    <FaGithub />
                            </a>
                        )}
                </h3>
                <p className='project-summary'>{project.summary}</p>
            </div>
        </>
    )
}