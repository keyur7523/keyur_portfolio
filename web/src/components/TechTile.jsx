import React from "react";
import './style/TechTile.css'

export default function TechTile({ tech }) {
    return (
        <div className="tech-tile">
            <p className="tech-name">{tech}</p>
        </div>
    )
}