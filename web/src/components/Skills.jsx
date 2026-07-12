import { skills, deepml } from '../data/skills';
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
                <div className='term-group'>
                    <p className='term-cmd'>
                        <span className='term-prompt' aria-hidden='true'>$</span> deep-ml --stats
                    </p>
                    <div className='term-output'>
                        <p>
                            {deepml.solved} ML problems solved from scratch
                            <span className='term-dim'> — {deepml.easy} easy · {deepml.medium} medium · {deepml.hard} hard</span>
                        </p>
                        <p className='term-dim'>
                            top: {deepml.topCategories.map(([name, n]) => `${name}(${n})`).join(' ')}
                        </p>
                        <a
                            className='term-link'
                            href={deepml.url}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            → view profile on deep-ml.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
