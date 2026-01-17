import React from "react";

export default function ExperienceItem({ idx, exp}) {
    return (
        <>
            <div className="exp-left-container">
                {idx < 9 ? `0${idx + 1}` : idx + 1}
            </div>
            <div className="exp-right-container">
                <p>{exp.position}</p>
                <p>{exp.company}</p>
                <div className="job-description">
                    {exp.description.map((point, i) => (
                        <p key={i}>{point}</p>
                    ))}
                </div>
            </div>
        </>
    )
}