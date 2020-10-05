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
                if (json.result.photos) {

                    Promise.all(json.result.photos.map(photo => {
                        return new Promise(res => {
                            fetch(process.env.REACT_APP_API_URL + `img/${photo.photo_reference}`)
                                .then(r => r.text())
                                .then(location => {
                                    photo.location = location
                                    res(location)
                                })
                        })
                    }))
                        .then(() => {
                            setData(json.result)
                            setLoading(false)
                        })
                } else {
                    json.result.photo = []
                    setData(json.result)
                    setLoading(false)
                }
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
                data.photos.map(photo => <img key={photo.photo_reference} src={photo.location} />)
            }
        </div>

    )
}
