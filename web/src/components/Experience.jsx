import clsx from 'clsx'
import './style/Experience.css'

export default function Experience(props) {
    const { experience, activeExperience, handleExperienceClick } = props;
    return (
        <button className={clsx('experience-button', activeExperience === experience.company && 'active')} onClick={() => handleExperienceClick(experience.company)}>
            <h1 className={clsx('experience-company', activeExperience === experience.company && 'active')}>{experience.company}</h1>
        </button>
    )
}