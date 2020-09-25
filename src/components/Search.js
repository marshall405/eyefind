import React from 'react'

import '../styles/search.css'
export default function Search() {
    return (
        <div className="search-container">
            <div className="search-bar">
                <span className="fas fa-search fa-2x"></span>
                <input type="text" placeholder="Search Eyefind" />
            </div>
            <button> RANDOM </button>
        </div>
    )
}
