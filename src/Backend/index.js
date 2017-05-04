const passport = require('passport');
const express = require('express');
const constants  = require('./config/constant');
const appConfig = require('./config/app');
const PORT =  constants.PORT ;
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

const app = express();
app.use(allowCrossDomain);
appConfig.appStarted(app);

app.listen(PORT,()=>{
    console.log('Listening on port %d',PORT);
});