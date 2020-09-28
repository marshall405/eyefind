import React, { useEffect, useState } from 'react'

import SponsoredAds from './SponsoredAds'
import Ads from './Ads'
export default function Home() {
    const [places, setPlaces] = useState([])
    const fetchPlaces = async (location) => {
        let { latitude, longitude } = location.coords
        fetch(`http://localhost:3001/api/places?lat=${latitude}&lng=${longitude}`)
            .then(res => res.json())
            .then(json => {
                setPlaces(json.results)
            })
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(fetchPlaces)
    }, [])

    return (
        <div className="main home">
            <SponsoredAds ads={places} />
            <Ads ads={places} />
        </div>
    )
}
