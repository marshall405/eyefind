import React from 'react'

import SponsoredAd from '../containers/SponsoredAd'

import '../styles/sponsoredAds.css'

export default function SponsoredAds() {
    return (
        <div className="sponsored-ads-container">
            <SponsoredAd />
            <SponsoredAd />
            <SponsoredAd />
        </div>
    )
}
