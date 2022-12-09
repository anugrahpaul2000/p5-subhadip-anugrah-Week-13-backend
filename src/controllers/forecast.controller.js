const { Forecast } = require('../services');

const Summary = {
    get: async(req, res) => {
        let url = Forecast.Summary;
        url = url.replace("{start_date}", req.query.start_date);
        url = url.replace("{end_date}", req.query.end_date);
        url = url.replace("{latitude}", req.query.latitude);
        url = url.replace("{longitude}", req.query.longitude);
        res.send(await (await fetch(url)).json());
    }
};

const Hourly = {
    get: async(req, res) => {
        let url = Forecast.Hourly;
        url = url.replace("{start_date}", req.query.start_date);
        url = url.replace("{end_date}", req.query.end_date);
        url = url.replace("{latitude}", req.query.latitude);
        url = url.replace("{longitude}", req.query.longitude);
        res.send(await (await fetch(url)).json());
    }
};

module.exports =  { Summary, Hourly };