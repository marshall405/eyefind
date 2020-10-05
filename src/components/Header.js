import React from 'react'
import { Link } from 'react-router-dom'

import Search from "./Search"
import Daily from "./Daily"

import '../styles/header.css'
import Logo from '../media/logo.png'
export default function Header() {
    return (
        <div className="header">
            <div className="header-container">

                <div className="header-top">
                    <Link to="/">
                        <img className="logo" src={Logo} alt="eyefind logo" />
                    </Link>
                    <div className="email-links">
                        <ul>
                            <li><a href="/"><span className="fas fa-envelope" ></span><span className="email-text"> Inbox </span></a></li>
                            <li className="vert"></li>
                            <li><a href="/"> <span className="fas fa-pen"></span><span className="email-text"> Compose New </span></a></li>
                        </ul>
                    </div>
                    <Daily />
                </div>
                <Search />
            </div>
        </div>
    )
}
