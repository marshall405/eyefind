import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Ad({ video }) {
    let path = useLocation().pathname
    return (

        <div className="ad adShow">
            {/* <h1> {ad.name}</h1> */}
            {/* <i className="far fa-gem"></i> */}
            {/* <img className="location-image" src={ad.img_src} alt={ad.name} /> */}
            <iframe id="player" type="text/html" width="250px" height="230px"
                src={`https://www.youtube.com/embed/${video}`}
                frameborder="2"></iframe>
        </div>

    )
}

