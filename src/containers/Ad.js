import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Ad({ video }) {
    let path = useLocation().pathname
    return (

        <div className="ad adShow">
            <iframe id="player" type="text/html" width="250px" height="230px" allowFullScreen
                src={`https://www.youtube.com/embed/${video}`}
                frameborder=""></iframe>
        </div>

    )
}

