const passport = require('passport');
const User = require('../api/users/user.model');
const GoogleStrategy   = require('passport-google-oauth2').Strategy;
const Constants = require('../config/constant');
const GOOGLE_CLIENT_ID = Constants.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = Constants.GOOGLE_CLIENT_SECRET;
const GOOGLE_CALLBACK_URL = Constants.GOOGLE_CALLBACK_URL;

module.exports.googleauth = () =>{
    passport.use(new GoogleStrategy({
            clientID:     GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: GOOGLE_CALLBACK_URL,
        },
        (token,refreshToken,profile,done)=>{
            User.findOne({'id':profile.id},(err,user) => {
                if(err){
                    done(err);
                }
                if(user) {
                    return done(null,user);
                }
                else{
                    let newUser = new User();
                    newUser.id = profile.id;
                    newUser.userName = profile.displayName;
                    newUser.emailID = profile.emails[0].value;
                    newUser.profile = profile._json;

                    newUser.save((err) => {
                        if (err){
                            return done(err);
                        }
                        return done(null, newUser);
                    });
                }
            })
        }
    ));


    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });
}