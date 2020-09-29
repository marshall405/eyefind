import React from 'react'

export default function SponsoredAd(props) {
    let ad = props.ad

    if (ad) {
        return (
            <div className="sponsored-ad" >
                <p> SPONSORED ADVERTISEMENT </p>
                <div className="ad-image">
                    <h1 className="img-title"> {ad.name} </h1>
                    <img src={ad.img_src} alt={ad.name} />
                </div>
            </div >
        )
    } else {
        return (
            <div className="sponsored-ad" >
                <p> SPONSORED ADVERTISEMENT </p>
                <div className="ad-image">
                    <span></span>
                </div>
            </div >
        )
    }
}
