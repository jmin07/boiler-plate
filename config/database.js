const mysql = require('mysql2/promise');
require('dotenv').config

// TODO: 본인 DB 계정 입력

const pool = mysql.createPool({
    host: process.env.dbHost,
    user: process.env.dbUser,
    port: process.env.dbPort,
    password: process.env.dbPassword,
    database: process.env.dbDatabase
});

module.exports = {
    pool: pool
};