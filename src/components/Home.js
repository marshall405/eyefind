import React, { useEffect } from 'react'

import SponsoredAds from './SponsoredAds'
import Ads from './Ads'

import fetchData from '../scripts/fetchData'

export default function Home(props) {

    const { places } = props

    useEffect(() => {
        let isCancelled = false;
        const abortController = new AbortController();

        fetchData(['any'], abortController)
            .then(data => {
                if (!isCancelled) {
                    props.setPlaces(data)
                }
            })

        return () => {
            isCancelled = true;

        }
    }, [])

    return (
        <div className="main home">
            <SponsoredAds ads={places} />
            <Ads ads={places.slice(4, places.length - 1)} />
        </div>
    )
}
