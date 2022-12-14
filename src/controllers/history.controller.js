const { History } = require('../services');

const Summary = {
    get: async(req, res) => {
        let url = History.Summary;
        url = url.replace("{start_date}", req.query.start_date);
        url = url.replace("{end_date}", req.query.end_date);
        url = url.replace("{latitude}", req.query.latitude);
        url = url.replace("{longitude}", req.query.longitude);
        res.send(await (await fetch(url)).json());
    }
};

const Hourly = {
    get: async(req, res) => {
        let url = History.Hourly;
        url = url.replace("{start_date}", req.query.start_date);
        url = url.replace("{end_date}", req.query.end_date);
        url = url.replace("{latitude}", req.query.latitude);
        url = url.replace("{longitude}", req.query.longitude);
        res.send(await (await fetch(url)).json());
    }
};

const DaysSummary = {
    get: async(req, res) => {
        let url = History.DaysSummary;
        url = url.replace("{past_days}", req.query.days);
        url = url.replace("{latitude}", req.query.latitude);
        url = url.replace("{longitude}", req.query.longitude);
        res.send(await (await fetch(url)).json());
    }
};

const DaysHourly = {
    get: async(req, res) => {
        let url = History.DaysHourly;
        url = url.replace("{past_days}", req.query.days);
        url = url.replace("{latitude}", req.query.latitude);
        url = url.replace("{longitude}", req.query.longitude);
        res.send(await (await fetch(url)).json());
    }
};

module.exports =  { Summary, Hourly, DaysSummary, DaysHourly };