const express = require("express");
const app = express();
const routes = require("./routes");
const { config } = require('./../config');
const port = config.PORT | 4000;

app.use("/weather", routes.weatherRouter.router);

app.listen(port, () => {
    console.log(`Weather API listening at ${port}`);
});

