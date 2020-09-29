import React from 'react'

import SponsoredAd from '../containers/SponsoredAd'

import '../styles/sponsoredAds.css'

export default function SponsoredAds(props) {
    let [one, two, three] = props.ads
    return (
        <div className="sponsored-ads-container">
            <SponsoredAd ad={one} />
            <SponsoredAd ad={two} odd />
            <SponsoredAd ad={three} />
        </div>
    )
}
