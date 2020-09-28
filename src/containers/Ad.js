import React from 'react'

export default function Ad({ ad }) {
    return (
        <div className="ad">
            <h1> {ad.name}</h1>
        </div>
    )
}
