const passport = require('passport');
const express = require('express');
var cors=require('cors');
var multer  = require('multer');
const constants  = require('./config/constant');
var cookieParser = require('cookie-parser');
const appConfig = require('./config/app');
const PORT =  constants.PORT ;
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

const app = express();
app.use(cookieParser());
app.use(allowCrossDomain);
app.use('/files', express.static('files'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, *');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
        return;
    }

    next();
});
app.use(cors({origin:true,credentials: true}));

appConfig.appStarted(app);
app.listen(PORT,()=>{
    console.log('Listening on port %d',PORT);
});