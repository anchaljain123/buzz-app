const buzzController = require('./buzz.controller');
//const path = require('path');
var multer  = require('multer');
var upload = multer({ dest: 'files/' });

module.exports = (app) =>{

    app.post('/saveBuzz',upload.single('img'), buzzController.saveBuzz);

    app.get('/buzz',buzzController.getBuzz);

    app.delete('/deleteBuzz',buzzController.deleteBuzz);

    app.put('/updateBuzz',buzzController.updateBuzz);


};