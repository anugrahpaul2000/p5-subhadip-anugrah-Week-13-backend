const { config } = require('../../config');

const BASE_PATH = config.BASE_URL;

const { Params } = require('./params');

const Summary = async (params) => {

    try {
        let url = `${BASE_PATH}/forecast?start_date={start_date}&end_date={end_date}&daily=${Params.Summary}&temperature_unit=celsius&timezone=auto&latitude={latitude}&longitude={longitude}`;
    
        url = url.replace("{start_date}", params.start_date);
        url = url.replace("{end_date}", params.end_date);
        url = url.replace("{latitude}", params.latitude);
        url = url.replace("{longitude}", params.longitude);
    
        return (await (await fetch(url)).json());
    } catch (error) {
        throw error;
    }
};

const Hourly = async (params) => {

    try {
        let url = `${BASE_PATH}/forecast?start_date={start_date}&end_date={end_date}&daily=${Params.Summary}&temperature_unit=celsius&timezone=auto&hourly=${Params.Hourly}&latitude={latitude}&longitude={longitude}`;
    
        url = url.replace("{start_date}", params.start_date);
        url = url.replace("{end_date}", params.end_date);
        url = url.replace("{latitude}", params.latitude);
        url = url.replace("{longitude}", params.longitude);
    
        return (await (await fetch(url)).json());
    } catch (error) {
        throw error;
    }
};

module.exports = { Summary, Hourly };