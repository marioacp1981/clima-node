const axios = require('axios');


const getLugarLatitudLongitud = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl}`,
        //timeout: 1000,
        headers: { 'x-rapidapi-key': 'b419fee419msh9cb51087dd50c79p175d69jsn8bd4ad6b5432' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay Resultados para ${ dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatitudLongitud
}