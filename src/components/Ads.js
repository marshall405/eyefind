import React from 'react'

import Ad from '../containers/Ad'

import '../styles/ads.css'
export default function Ads(props) {
    return (
        <div className="ads-container">
            {
                props.ads.map(ad => <Ad ad={ad} />)
            }
            {/* <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad /> */}
        </div>
    )
}
