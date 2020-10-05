import React, { useState, useEffect } from 'react'

import SponsoredAds from './SponsoredAds'
import Ads from './Ads'

import fetchData from '../scripts/fetchData'

export default function FashionAndHealth() {
    let types = ['beauty_salon', 'clothing_store', 'department_store', 'drugstore', 'jewelry_store', 'shopping_mall', 'shoe_store', 'pharmacy', 'hospital']
    const [data, setData] = useState([])
    useEffect(() => {
        let isCancelled = false;
        const abortController = new AbortController();

        fetchData(types, abortController)
            .then(data => {
                if (!isCancelled) {
                    setData(data)
                }
            })

        return () => {
            isCancelled = true;

        }
    }, [])
    return (
        <div>
            <SponsoredAds ads={data} />
            <Ads ads={data.slice(4, data.length - 1)} />
        </div>
    )
}
