import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Ad({ video }) {
    return (
        <div className="ad adShow">
            <iframe
                title="Youtube Video - GTA"
                id={`player${video}`}
                type="text/html"
                width="100%" height="100%"
                frameBorder=""
                allowFullScreen
                src={`https://www.youtube.com/embed/${video}`}
                onMouseEnter={autoPlay}
            >
            </iframe>
        </div>

    )
}

