const complaintService  =  require('./complaint.service');

exports.saveComplain = function(req,res,next) {

    const complainDetails = req.body;
    complainDetails.complainCreated = Date.now();
    complainDetails.status = "Pending";
    complainDetails.complainUpdated = Date.now();
    complaintService.saveComplain(complainDetails,res);

}

exports.getComplain = function (req,res,next) {
    complaintService.getComplain(res);
}