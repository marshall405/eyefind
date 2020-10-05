import React, { useEffect, useState } from 'react'

import { useParams } from "react-router-dom";

export default function Place() {
    let { id } = useParams()
    let [data, setData] = useState({})
    let [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + id)
            .then(res => res.json())
            .then(json => {

                setData(json.result)
                setLoading(false)
                console.log(json.result)
            })
        return () => {

        }
    }, [])
    if (loading) {
        return (
            <div>
                loading
                </div>
        )
    }
    return (

        <div>
            <h1> {data.name}</h1>
            <p> {data.formatted_address} </p>
            <p> {data.formatted_phone_number} </p>
            {/* <p> {data.opening_hours.open_now ? 'OPEN' : 'CLOSED'} </p> */}
            {
                data.photos.map(photo => <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=`} />)
            }
        </div>

    )
}