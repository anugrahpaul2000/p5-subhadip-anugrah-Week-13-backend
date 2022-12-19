const { Forecast } = require('../services');

const Summary = {
    get: async(req, res) => {
        try {
            params = { 
                start_date: req.query.start_date, 
                end_date: req.query.end_date, 
                latitude: req.query.latitude,
                longitude: req.query.longitude
            };
            res.send(await (Forecast.Summary(params)) );
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
            res.send(await (Forecast.Hourly(params)) );
        } catch (error) {
            res.status(400).send({error: error});
        }
    }
};

module.exports =  { Summary, Hourly };