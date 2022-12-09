const { CurrentController, ForecastController, HistoryController } = require("./../controllers");
const express = require("express");
const router = express.Router();

/**
 * Current
 */
router.get("/current/summary", CurrentController.Summary.get);
router.get("/current/hourly", CurrentController.Hourly.get);

/**
 * Forecast
 */
router.get("/forecast/summary", ForecastController.Summary.get);
router.get("/forecast/hourly", ForecastController.Hourly.get);

/**
 * History
 */
router.get("/history/summary", HistoryController.Summary.get);
router.get("/history/hourly", HistoryController.Hourly.get);
router.get("/history/days/summary", HistoryController.DaysSummary.get);
router.get("/history/days/hourly", HistoryController.DaysHourly.get);

module.exports = { router };