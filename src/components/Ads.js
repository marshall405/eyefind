import React from 'react'

import Ad from '../containers/Ad'

import '../styles/ads.css'
export default function Ads(props) {
    return (
        <div className={`ads-container ${props.ads.length > 0 ? 'show' : null}`}>
            {
                props.ads.map(ad => <Ad key={ad.place_id} ad={ad} />)
            }

        </div>
    )
}
