const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1f2191e9573309ac38de49b75f5812bb&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}