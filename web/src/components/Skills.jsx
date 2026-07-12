import { skills } from '../data/skills';
import './style/Skills.css';

export default function Skills() {
    return (
        <div className='terminal'>
            <div className='terminal-bar'>
                <span className='terminal-dot red' aria-hidden='true'></span>
                <span className='terminal-dot yellow' aria-hidden='true'></span>
                <span className='terminal-dot green' aria-hidden='true'></span>
                <span className='terminal-title'>keyur@portfolio — skills</span>
            </div>
            <div className='terminal-body'>
                {skills.map((section) => {
                    const slug = section.category.toLowerCase().replaceAll(/[\s/]+/g, '-')
                    return (
                        <div className='term-group' key={section.category}>
                            <p className='term-cmd'>
                                <span className='term-prompt' aria-hidden='true'>$</span> ls {slug}/
                            </p>
                            <div className='term-chips'>
                                {section.tech.map((skill, idx) => {
                                    const IconComp = section.icons[idx]
                                    return (
                                        <span className='term-chip' key={skill}>
                                            {IconComp ? <IconComp aria-hidden='true' /> : null}
                                            {skill}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
