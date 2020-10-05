import React, { useEffect } from 'react'

import SponsoredAds from './SponsoredAds'
import Ads from './Ads'

import fetchData from '../scripts/fetchData'

export default function FoodAndDrink({ setPlaces, places }) {
    let types = ['cafe', 'bakery', 'restaurant', 'bar', 'supermarket', 'meal_takeaway', 'liquor_store']

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
