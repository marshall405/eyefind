import React, { useState, useEffect } from 'react'

import SponsoredAds from './SponsoredAds'
import Ads from './Ads'

import fetchData from '../scripts/fetchData'

export default function TravelAndTransport({ setPlaces, places }) {
    let types = ['airport', 'bus_station', 'campground', 'car_rental', 'travel_agency', 'transit_agency', 'taxi_stand', 'transit_station', 'subway_station', 'lodging', 'light_rail_station']

    useEffect(() => {
        let isCancelled = false;
        const abortController = new AbortController();

        fetchData(types, abortController)
            .then(data => {
                if (!isCancelled) {
                    setPlaces(data)
                }
            })

        return () => {
            isCancelled = true;
        }
    }, [])
    return (
        <div>
            <SponsoredAds ads={places} />
            <Ads ads={places.slice(4, places.length - 1)} />
        </div>
    )
}
