const argv = require('yargs')
    .options({
        direccion:{
            alias:'d',
            demand:true
        }
    })
    .argv;

const colors = require('colors');

const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');


const getInfo = async (dir) => {

    try{
        let ubicacion = await lugar.getLugar(dir);
        let temperatura = await clima.getClima(ubicacion.lat,ubicacion.long);
        
        //return `El clima de ${ubicacion.name} cuya latitud y longitud son ${ubicacion.lat} , ${ubicacion.long} es de ${temperatura}°C`;
    
        return {
            ciudad:ubicacion.name,
            lat:ubicacion.lat,
            long:ubicacion.long,
            temperatura
        }
    }
    catch(e)
    {
        throw new Error(`No se ha podido obtener el clima de la ciudad ingresada`)
    }

};


getInfo(argv.direccion)
.then(
    resp=>{
        console.log('=====\nExito\n====='.green);
        console.log(`La temperatura de ${resp.ciudad}, cuya latitud y longitud es:`);
        console.log(`Latitud: ${resp.lat}\nLongitud: ${resp.long}`);
        console.log(`es de: ${resp.temperatura}°C`);
    }
).catch(err=>console.log(err));