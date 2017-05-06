const buzzController = require('./buzz.controller');

module.exports = (app) =>{

    app.post('/saveBuzz',buzzController.saveBuzz);

    app.get('/buzz',buzzController.getBuzz);
}