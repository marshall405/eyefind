import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Ad({ ad }) {
    let path = useLocation().pathname

    return (
        <Link to={`${path === '/' ? 'home' : path}/${ad.place_id}`}>
            <div className="ad adShow">
                <h1> {ad.name}</h1>
                {/* <img className="location-icon" src={ad.icon} alt={ad.name} /> */}
                <i className="far fa-gem"></i>
                <img className="location-image" src={ad.img_src} alt={ad.name} />
            </div>
        </Link>
    )
}
