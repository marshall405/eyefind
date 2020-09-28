import React from 'react'

import Ad from '../containers/Ad'

import '../styles/ads.css'
export default function Ads(props) {

    const ad = props.ads[0]
    return (
        <div className="ads-container">
            {
                props.ads.map(ad => <Ad key={ad.place_id} ad={ad} />)
            }

        </div>
    )
}
