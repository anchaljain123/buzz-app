const buzzController = require('./buzz.controller');
const multer  = require('multer');
const upload = multer({ dest: 'files/' });

module.exports = (app) =>{

    app.post('/saveBuzz',upload.single('img'), buzzController.saveBuzz);

    app.get('/buzz',buzzController.getBuzz);

    app.get('/lostnfoundbuzz',buzzController.getlostnfoundBuzz);

    app.delete('/deleteBuzz',buzzController.deleteBuzz);


};