import React, { useEffect } from 'react'
import Search from "./Search"
import Daily from "./Daily"

import '../styles/header.css'
import Logo from '../media/logo.png'
export default function Header() {
    return (
        <div className="header">
            <div className="header-container">

                <div className="header-top">
                    <img className="logo" src={Logo} />
                    <div className="email-links">
                        <ul>
                            <li><a href="#"><span className="fas fa-envelope" ></span><span className="email-text"> Inbox </span></a></li>
                            <li className="vert"></li>
                            <li><a href="#"> <span className="fas fa-pen"></span><span className="email-text"> Compose New </span></a></li>
                        </ul>
                    </div>
                    <Daily />
                </div>
                <Search />
            </div>
        </div>
    )
}
