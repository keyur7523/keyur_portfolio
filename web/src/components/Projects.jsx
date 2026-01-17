import './style/Projects.css'
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";


export default function Projects(props) {
    const { project } = props;
    return (

        <>
            <div className={`project-card project-${project.name.toLowerCase().replace(' ', '-')}`}>
                <div className='project-images'>
                    <img className='project-image' src={project.images[0]} alt={project.name} />
                </div>
                <div className='project-name-link'></div>
                    <h1 className='project-name'>
                        {project.name}
                        <Link 
                            to={`/projects/${project.name.toLowerCase().replace(' ', '-')}`} 
                            className='project-link'>
                                <FaExternalLinkAlt />
                        </Link>
                </h1>
                <p className='project-summary'>{project.summary}</p>
            </div>
        </>
    )
}