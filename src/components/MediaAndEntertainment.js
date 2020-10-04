import React, { useState, useEffect } from 'react'

import SponsoredAds from './SponsoredAds'
import Ads from './Ads'

import fetchData from '../scripts/fetchData'

export default function MediaAndEntertainment() {
    let types = ['amusement_park', 'aquarium', 'casino', 'zoo', 'stadium', 'park', 'museum', 'night_club', 'movie_theater']
    const [data, setData] = useState([])
    useEffect(() => {
        let d = Promise.all(types.map(type => fetchData(type)))
            .then(data => {
                let allData = []
                data.forEach(arr => {
                    allData.push(...arr)
                })
                return allData
            })
            .then((allData) => {
                let places = {}
                allData.forEach(place => {
                    if (place.photos) {
                        places[place.place_id] = place
                    }
                })
                return places
            })
            .then(places => {
                let data = []
                for (const place in places) {
                    data.push(places[place])
                }
                return data
            })
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <SponsoredAds ads={data} />
            <Ads ads={data.slice(4, data.length - 1)} />
        </div>
    )
}
