import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-links">
                <ul>
                    <li>
                        <Link to="/">
                            <span className="fas fa-mobile-alt fa-2x link-icon"></span>
                            <div>
                                <span className="link-text"> MEDIA AND ENTERTAINMENT</span>
                            </div>
                        </Link>
                    </li>

                    <div className="link-vert"></div>

                    <li>
                        <Link to="/">
                            <span className="fas fa-hamburger fa-2x"></span>
                            <div>
                                <span className="link-text">FOOD <br /> AND DRINK</span>
                            </div>
                        </Link>
                    </li>

                    <div className="link-vert"></div>

                    <li>
                        <Link to='/'>
                            <span className="fas fa-comment-dollar fa-2x"></span>
                            <div>
                                <span className="link-text">MONEY<br />AND SERVICES</span>
                            </div>
                        </Link>

                    </li>

                    <div className="link-vert"></div>

                    <li>
                        <Link to="/">
                            <span className="fas fa-plane fa-2x"></span>
                            <div>
                                <span className="link-text">TRAVEL <br /> AND TRANSPORT</span>
                            </div>
                        </Link>
                    </li>

                    <div className="link-vert"></div>

                    <li>
                        <Link to="/">
                            <span className="fas fa-shopping-bag fa-2x"></span>
                            <div>
                                <span className="link-text">FASHION <br /> AND HEALTH</span>
                            </div>
                        </Link>
                    </li>

                </ul>
            </div>
        </div >
    )
}
