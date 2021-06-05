const axios = require('axios');

const getLugar = async (dir) =>{
    const dirCodif = encodeURI(dir);
    
    const instancia = axios.create({
        baseURL: `http://api.positionstack.com/v1/forward?access_key=781e8870bf686fabc5c65bcc8a66c66f&query=${dirCodif}`,
      });
    
    const respuesta = await instancia.get();

    if(respuesta.data.length === 0)
    {
        throw new Error ( `No hay resultados para la dirección ${dir} ingresada`);
    }

    const informacion= respuesta.data.data[0];

    const {name,latitude:lat,longitude:long} = informacion;

    return {
        name,
        lat,
        long
    }

}

module.exports={
    getLugar
}