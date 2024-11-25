const mysql = require('mysql2/promise');
const config = require("./config.json");

const db = mysql.createPool(config.database);

module.exports = db;
