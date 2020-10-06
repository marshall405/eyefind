export default async function fetchData(types = ['any'], abortController) {
    const URL = process.env.REACT_APP_API_URL

    let location = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject)).catch(e => console.log(e))
    if (!location) {
        location = {
            coords: {
                latitude: 30.2672,
                longitude: -97.7431
            }
        }
    }

    let { latitude, longitude } = location.coords

    return Promise.all(types.map(type => {
        return new Promise(res => {
            console.log(URL)
            fetch(`${URL}?lat=${latitude}&lng=${longitude}&type=${type}`, { signal: abortController.signal })
                .then(res => res.json())
                .then(json => {
                    res(json)
                })
        })
    }))
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
}




