import React from 'react'
import { Link, useLocation } from 'react-router-dom'
export default function SponsoredAd(props) {
    let ad = props.ad
    let path = useLocation().pathname
    if (ad) {
        return (
            <Link to={`${path}/${ad.place_id}`}>
                <div className="sponsored-ad" >
                    <p> SPONSORED ADVERTISEMENT </p>
                    <div className="ad-image">
                        <h1 className="img-title"> {ad.name} </h1>
                        <img src={ad.img_src} alt={ad.name} />
                    </div>
                </div >
            </Link>
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
