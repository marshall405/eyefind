import React, { useEffect, useState } from 'react'

export default function Ad({ ad }) {

    return (
        <div className="ad">
            <h1> {ad.name}</h1>
            <img className="location-icon" src={ad.icon} alt={ad.name} />

            <img className="location-image" src={ad.img_src} />
        </div>
    )
}
