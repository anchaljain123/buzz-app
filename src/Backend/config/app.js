require('./connection');
const passport = require('passport');
const bodyParser = require('body-parser');
const googleAuth = require('../Authentication/user-googleOAuth2.0');
const session = require('express-session');
const routing = require('./Route');
const userRoute = routing.userRoute;


module.exports.appStarted=(app)=>{

    app.use(session({secret:'6786476467'}),passport.initialize(),passport.session());
    app.use(bodyParser());
    googleAuth.googleauth();
    userRoute(app);

};




