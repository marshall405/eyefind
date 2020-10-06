import React from 'react'

import SponsoredAds from '../SponsoredAds'
import Ads from '../Ads'

export default function FashionAndHealth({ setPlaces, places }) {
    return (
        <div>
            <SponsoredAds ads={places} />
            <Ads ads={places.slice(4, places.length - 1)} />
        </div>
    )
}
