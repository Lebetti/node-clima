const axios = require('axios');


const getClima = async (lat,lon) => {
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b574a7fbd7122e0f2a5e64166967845d&units=metric`);

    return resp.data.main.temp;

};

module.exports={
    getClima
}