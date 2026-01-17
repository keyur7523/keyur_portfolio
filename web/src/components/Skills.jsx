import { skills } from '../data/skills';
import './style/Skills.css';

export default function Skills() {
    return (
        <div className='skills-grid'>
            {skills.map((section, idx) => {
                return (
                    <div className={`skills-section skills-section-${section.category.toLowerCase().replace(' ', '-')}`} key={section.category || idx}>
                        <h2 className='skills-category'>{section.category}</h2>
                        <div className='skills-list'>
                            {section.tech.map((skill, idx) => {
                                const IconComp = section.icons[idx]
                                return(
                                    <div className='skill-item' key={idx}>
                                        <div className='skill-icon'>{IconComp ? <IconComp /> : null}</div>
                                        <div className='skill-name'>{skill}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}