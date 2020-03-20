const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=9b9a3719486237c4df3fbb2b701a3b99&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}