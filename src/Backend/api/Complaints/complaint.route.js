const complaintController = require('./complaint.controller');

module.exports  = (app) =>{

    app.post('/saveComplain',complaintController.saveComplain);

    app.get('/complaints',complaintController.getComplain);

}