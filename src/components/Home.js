import React from 'react'

import SponsoredAds from './SponsoredAds'
import Ads from './Ads'
export default function Home() {
    return (
        <div className="main home">
            <SponsoredAds />
            <Ads />
        </div>
    )
}
