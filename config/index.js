require("dotenv").config();

const { dev } = require("./dev.config");

switch (process.env.NODE_ENV) {
    case 'development': 
        module.exports = require("./dev.config");
        break;

    case 'production':
        module.exports = require("./prod.config");
        break;

    default :
        module.exports = require("./dev.config");
}