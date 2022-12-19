const { History } = require('../services');

const Summary = {
    get: async(req, res) => {
        try {
            params = { 
                start_date: req.query.start_date, 
                end_date: req.query.end_date, 
                latitude: req.query.latitude,
                longitude: req.query.longitude
            };
            res.send(await (History.Summary(params)) );
        } catch (error) {
            res.status(400).send({error: error});
        }
    }
};

const Hourly = {
    get: async(req, res) => {
        try {
            params = { 
                start_date: req.query.start_date, 
                end_date: req.query.end_date, 
                latitude: req.query.latitude,
                longitude: req.query.longitude
            };
            res.send(await (History.Hourly(params)) );
        } catch (error) {
            res.status(400).send({error: error});
        }
    }
};

const DaysSummary = {
    get: async(req, res) => {
        try {
            params = { 
                days: req.query.days, 
                latitude: req.query.latitude,
                longitude: req.query.longitude
            };
            res.send(await (History.DaysSummary(params)) );
        } catch (error) {
            res.status(400).send({error: error});
        }
    }
};

const DaysHourly = {
    get: async(req, res) => {
        try {
            params = { 
                days: req.query.days, 
                latitude: req.query.latitude,
                longitude: req.query.longitude
            };
            res.send(await (History.DaysHourly(params)) );
        } catch (error) {
            res.status(400).send({error: error});
        }
    }
};


module.exports =  { Summary, Hourly, DaysSummary, DaysHourly };