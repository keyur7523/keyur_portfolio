import ProjectCard from '../components/Projects'
import { projectList } from '../data/projectList'
import './style/Projects.css'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/Animations'

export default function Projects() {
    return (
        <div className="projects-page">
            <div className="projects-heading">
                <FadeIn delay={0.1}>
                    <h1>My <span className='accent'>Best</span> Creations</h1>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p>Real-world projects focused on usability, speed, and clean design.</p>
                </FadeIn>
            </div>
            <StaggerContainer className='projects-grid'>
                {projectList.map((project) => (
                    <StaggerItem key={project.name}>
                        <ProjectCard project={project} />
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
    )
}