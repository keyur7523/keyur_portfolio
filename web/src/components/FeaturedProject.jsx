import './style/FeaturedProject.css'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { LuExternalLink } from 'react-icons/lu'

export default function FeaturedProject({ project }) {
    const slug = project.name.toLowerCase().replaceAll(' ', '-')
    return (
        <article className='featured-project'>
            <div className='featured-info'>
                <p className='featured-label'>★ featured build</p>
                <h3 className='featured-name'>
                    <Link to={`/projects/${slug}`}>{project.name}</Link>
                </h3>
                <p className='featured-summary'>{project.summary}</p>
                {project.highlights && (
                    <ul className='featured-highlights'>
                        {project.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                        ))}
                    </ul>
                )}
                <div className='featured-actions'>
                    <a className='featured-live' href={project.link} target='_blank' rel='noopener noreferrer'>
                        Live demo <LuExternalLink />
                    </a>
                    {project.github && (
                        <a className='featured-gh' href={project.github} target='_blank' rel='noopener noreferrer'>
                            <FaGithub /> Source
                        </a>
                    )}
                    <Link className='featured-case' to={`/projects/${slug}`}>
                        Case study &rarr;
                    </Link>
                </div>
            </div>
            <Link to={`/projects/${slug}`} className='featured-media' aria-label={`${project.name} details`}>
                <img src={project.images[0]} alt={project.name} loading='lazy' decoding='async' />
            </Link>
        </article>
    )
}
