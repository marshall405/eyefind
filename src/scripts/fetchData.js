async function fetchData(type) {
    const URL = process.env.REACT_APP_API_URL
    let location = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject))

    let { latitude, longitude } = location.coords
    return new Promise(res => {

        fetch(`${URL}?lat=${latitude}&lng=${longitude}&type=${type}`)
            .then(res => res.json())
            .then(json => {
                res(json)
            })
    })
}


module.exports = fetchData