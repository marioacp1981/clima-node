const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener clima',
        demond: true
    }
}).argv;

/*
lugar.getLugarLatitudLongitud(argv.direccion)
    .then(console.log)

clima.getClima(3.030000, -75.169998)
    .then(console.log)
    .catch(console.log);

    */

const getInfo = async(direccion) => {
    try {
        const cordenadas = await lugar.getLugarLatitudLongitud(direccion);
        const temperatura = await clima.getClima(cordenadas.lat, cordenadas.lng);
        return `El clima de ${ cordenadas.direccion } es de ${ temperatura }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion } Por ${ e }`;
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);