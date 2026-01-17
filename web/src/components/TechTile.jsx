import React from "react";
import './style/TechTile.css'

export default function TechTile({ tech }) {
    return (
        <div className="tech-tile">
            <h1>{tech}</h1>
        </div>
    )
}