import React from 'react'

import Ad from '../containers/Ad'

import '../styles/ads.css'
export default function Ads({ videos }) {

    return (
        <div className={`ads-container ${videos.length > 0 ? 'show' : null}`}>

            {
                videos.map((video, idx) => <Ad key={idx} video={video} />)
            }

        </div>
    )
}
