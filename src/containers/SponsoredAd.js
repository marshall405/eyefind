import React from 'react'
import { Link, useLocation } from 'react-router-dom'
export default function SponsoredAd(props) {
    let { video } = props
    let path = useLocation().pathname

    if (video) {
        return (

            <div className="sponsored-ad" >
                <p> SPONSORED ADVERTISEMENT </p>
                <div className="ad-image">
                    <iframe id="player" type="text/html" width="330px" height="200"
                        src={`https://www.youtube.com/embed/${video}`}
                        frameborder="0"></iframe>
                </div>
            </div >
        )
    } else {
        return (
            <div className="sponsored-ad" >
                <p> SPONSORED ADVERTISEMENT </p>
                <div className="ad-image">
                    <span className={props.odd ? 'odd' : null}></span>
                </div>
            </div >
        )
    }
}
