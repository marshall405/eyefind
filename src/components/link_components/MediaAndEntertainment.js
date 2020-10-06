import React, { useEffect } from 'react'

import SponsoredAds from '../SponsoredAds'
import Ads from '../Ads'

export default function MediaAndEntertainment({ setPlaces, places }) {
    return (
        <div>
            <SponsoredAds ads={places} />
            <Ads ads={places.slice(4, places.length - 1)} />
        </div>
    )
}
