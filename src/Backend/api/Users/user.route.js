const passport = require('passport');
const userController = require('./users.controller');


/*removeCache = (req, res, next) =>{
    if (!req.user) {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
    }
    next();
};*/

module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

    app.get('/profilecb', passport.authenticate('google', {
        failureRedirect: '/failureredirect', successRedirect: "/redirecturl"
    }));

    app.get('/redirecturl', (req, res) => {
        if (req.isAuthenticated()) {
            res.redirect('http://localhost:9000/profile');
        }
        else {
            res.redirect('http://localhost:9000/');
        }
    });

    app.get('/failureredirect', (req, res) => {
        res.redirect('http://localhost:9000/');
    });
    app.get('/user', userController.getUser);

    app.get('/currentUser', userController.getCurrentUser);

    app.get('/profile', (req, res) => {
        res.redirect('http://localhost:9000/');
    });
    app.get('/logout' ,(req, res) => {
       // req.session.destroy();
        req.logout();
            res.redirect('http://localhost:9000/');
    })
};




