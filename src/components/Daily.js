import React from 'react'

import '../styles/daily.css'

export default function Daily() {
    return (
        <div className="daily-container">
            <div className="daily-left-side">
                <p> Rockford Hills </p>
                <p> Fri </p>
            </div>
            <div className="daily-vert"></div>
            <div className="daily-right-side">
                <span className="fas fa-cloud-sun fa-2x"></span>
            </div>
        </div>
    )
}
