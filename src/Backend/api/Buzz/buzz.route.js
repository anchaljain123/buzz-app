const buzzController = require('./buzz.controller');
const imagesUpload  = require('images-upload-middleware');

module.exports = (app) =>{

    app.post('/saveBuzz',buzzController.saveBuzz);

    app.get('/buzz',buzzController.getBuzz);

    app.delete('/deleteBuzz',buzzController.deleteBuzz);

    // app.post('/notmultiple', imagesUpload(
    //     './server/static/files',
    //     'http://localhost:4000/static/files'
    // ));


}