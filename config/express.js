require('dotenv').config

// middleware
const express = require('express');
const morgan = require('morgan');

// Route Path
const userRoute = require('../src/app/User/userRoute')
// const boardRoute = require('../src/app/Board/')

module.exports = () => {
    const app = express();

    // 개발용
    app.use(morgan('dev'));

    // post json 데이터 읽기 위해
    app.use(express.json()); 
    app.use(express.urlencoded({extends:true})); // true: qs, false: querystring

    // Route path
    userRoute(app);
    // boardRoute(app);

    // try experiment
    // app.use('/user', user);
    // app.use('/board', boardRoute);

    return app;
}