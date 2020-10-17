import React, { useState } from 'react'

import SponsoredAds from './SponsoredAds'
import Ads from './Ads'

export default function Home(props) {
    const [videos, setVideos] = useState(['bZhrwL3GXpY', 'JONiRgjknKA', 'lA44Gyf3psk', '-yZM5Tu3mPM', 'ZUQjojymH6A', 'nAiO69sLC6k', 'fsmaeKOLiUg', '46llIRp53LM', 'vMXq-4UDZ4c', 'gdncjPLQrlw', 'u1vFZe-PWf8'])

    return (
        <div className="main home">
            <SponsoredAds videos={videos.slice(0, 3)} />
            <Ads videos={videos.slice(3)} />
        </div>
    )
}
