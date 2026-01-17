import ProjectCard from '../components/Projects'
import { projectList } from '../data/projectList'
import './style/Projects.css'

export default function Projects() {
    return (
        <div className="projects-page">
            <div className="projects-heading">
                <h1>My <span className='accent'>Best</span> Creations</h1>
                <p>Real-world projects focused on usability, speed, and clean design.</p>
            </div>
            <div className='projects-grid'>
                {projectList.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </div>
    )
}