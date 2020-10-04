import React, { useEffect, useState } from 'react'

export default function Ad({ ad }) {

    return (
        <div className="ad adShow">
            <h1> {ad.name}</h1>
            {/* <img className="location-icon" src={ad.icon} alt={ad.name} /> */}
            <i className="far fa-gem"></i>
            <img className="location-image" src={ad.img_src} />
        </div>
    )
}
