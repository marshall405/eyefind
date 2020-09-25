import React, { useEffect } from 'react'
import Search from "./Search"

import '../styles/header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="header-container">

                <div className="header-top">

                    <h1 className="logo">eyefind.info</h1>
                    <div className="email-links">
                        <ul>
                            <li><a href="#"><span className="fas fa-envelope" ></span><span className="email-text"> Inbox </span></a></li>
                            <li className="vert"></li>
                            <li><a href="#"> <span className="fas fa-pen"></span><span className="email-text"> Compose New </span></a></li>
                        </ul>
                    </div>

                </div>
                <Search />
            </div>
        </div>
    )
}
