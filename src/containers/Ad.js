import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Ad({ video }) {
    let path = useLocation().pathname
    return (

        <div className="ad adShow">
            <iframe title="Youtube Video - GTA" id="player" type="text/html" width="100%" height="100%" allowFullScreen
                src={`https://www.youtube.com/embed/${video}`}
                frameBorder=""
                onClick={e => console.log(e.data)}
            >
            </iframe>
        </div>

    )
}

