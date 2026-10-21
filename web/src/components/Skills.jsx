import { skills } from '../data/skills';
import './style/Skills.css';

export default function Skills() {
    return (
        <div className='skill-cards'>
            {skills.map((section) => (
                <section className='skill-card' key={section.category}>
                    <h3 className='skill-card-title'>{section.category}</h3>
                    <ul className='skill-chips'>
                        {section.tech.map((skill, idx) => {
                            const IconComp = section.icons[idx]
                            const color = section.colors?.[idx]
                            return (
                                <li className='skill-chip' key={skill}>
                                    {IconComp ? <IconComp aria-hidden='true' style={color ? { color } : undefined} /> : null}
                                    {skill}
                                </li>
                            )
                        })}
                    </ul>
                </section>
            ))}
        </div>
    )
}
