import React from 'react'

import SponsoredAds from './SponsoredAds'
import Ads from './Ads'

export default function Home(props) {
    let places = []
    return (
        <div className="main home">
            <SponsoredAds ads={places} />
            <Ads ads={places.slice(4, places.length - 1)} />
        </div>
    )
}
