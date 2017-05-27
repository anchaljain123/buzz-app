require('./connection');
const passport = require('passport');
const bodyParser = require('body-parser');
const googleAuth = require('../Authentication/user-googleOAuth2.0');
const session = require('express-session');
const routing = require('./Route');
const userRoute = routing.userRoute;
const buzzRoute = routing.buzzRoute;
const complainRoute = routing.complainRoute;
const likeRoute = routing.likeRoute;
const commentRoute = routing.commentRoute;

module.exports.appStarted=(app)=>{
    app.use(session({secret:'6786476467'}),passport.initialize(),passport.session());
    app.use(bodyParser());
    googleAuth.googleauth();
    userRoute(app);
    buzzRoute(app);
    complainRoute(app);
    likeRoute(app);
    commentRoute(app);
 /*   app.use((req, res, next)=>{
    res.status(404).send('404_error_template', {title: "Sorry, page not found"});
  });*/
};




