const { Current } = require('../services');

const Summary = {
    get: async(req, res) => {
        try {
            params = { 
                date: req.query.date, 
                latitude: req.query.latitude,
                longitude: req.query.longitude
            };
            res.send(await (Current.Summary(params)) );
        } catch (error) {
            res.status(400).send({error: error});
        }
    }
};

const Hourly = {
    get: async(req, res) => {
        try {
            params = { 
                date: req.query.date, 
                latitude: req.query.latitude,
                longitude: req.query.longitude
            };
            res.send(await (Current.Hourly(params)) );
        } catch (error) {
            res.status(400).send({error: error});
        }
    }
};

module.exports =  { Summary, Hourly };