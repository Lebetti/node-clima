const axios = require('axios');

const getLugar = async (dir) =>{
    const dirCodif = encodeURI(dir);
    
    const instancia = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dirCodif}`,
        headers: {'X-RapidAPI-Key': '19003cb3bcmsh58052d3b4b851a9p1893c0jsnddcf66edff04'}
      });
    
    const respuesta = await instancia.get();

    if(respuesta.data.Results.length === 0)
    {
        throw new Error ( `No hay resultados para la dirección ${dir} ingresada`);
    }

    const informacion= respuesta.data.Results[0];

    const {name,lat,lon:long} = informacion;

    return {
        name,
        lat,
        long
    }

}

module.exports={
    getLugar
}