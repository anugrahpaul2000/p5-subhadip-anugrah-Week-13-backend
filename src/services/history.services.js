const { config } = require('../../config');

const BASE_PATH = config.BASE_URL;

const { Params } = require('./params');

const Summary = `${BASE_PATH}/forecast?start_date={start_date}&end_date={end_date}&daily=${Params.Summary}&temperature_unit=celsius&timezone=auto&latitude={latitude}&longitude={longitude}`;

const Hourly = `${BASE_PATH}/forecast?start_date={start_date}&end_date={end_date}&daily=${Params.Summary}&temperature_unit=celsius&timezone=auto&hourly=${Params.Hourly}&latitude={latitude}&longitude={longitude}`;

const DaysSummary = `${BASE_PATH}/forecast?daily=${Params.Summary}&temperature_unit=celsius&timezone=auto&past_days={past_days}&latitude={latitude}&longitude={longitude}`;

const DaysHourly = `${BASE_PATH}/forecast?daily=${Params.Summary}&temperature_unit=celsius&timezone=auto&hourly=${Params.Hourly}&past_days={past_days}&latitude={latitude}&longitude={longitude}`;

module.exports = { Summary, Hourly, DaysSummary, DaysHourly };