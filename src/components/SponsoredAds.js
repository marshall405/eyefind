import React from 'react'

import SponsoredAd from '../containers/SponsoredAd'

import '../styles/sponsoredAds.css'

export default function SponsoredAds({ videos }) {

    return (
        <div className="sponsored-ads-container">
            <SponsoredAd video={videos[0]} />
            <SponsoredAd video={videos[1]} odd />
            <SponsoredAd video={videos[2]} />
        </div>
    )
}
