import React, { useRef } from 'react'

import '../styles/search.css'
export default function Search() {
    const textInput = useRef(null)
    const handleClick = () => {
        textInput.current.focus()
    }
    return (
        <div className="search-container" onClick={handleClick}>
            <div className="search-bar">
                <span className="fas fa-search fa-2x"></span>
                <input ref={textInput} type="text" placeholder="Search Eyefind" disabled />
            </div>
            <button type="button" disabled> RANDOM </button>
        </div>
    )
}
