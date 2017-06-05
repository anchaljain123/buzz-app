const complaintService  =  require('./complaint.service');

exports.saveComplain = function(req,res,next) {

    const complainDetails = req.body;
    complainDetails.complainCreated = Date.now();
    complainDetails.status = "Pending";
    complainDetails.complainUpdated = Date.now();
    if(complainDetails.category && (complainDetails.title||complainDetails.description ))
    complaintService.saveComplain(complainDetails,res);

};

exports.getComplain = function (req,res,next) {
    complaintService.getComplain(res);
};

exports.deleteComplain = function (req,res,next) {
  const complainID = req.body;
  complaintService.deleteComplain(complainID,res)
};

exports.resolveComplain = (req,res,next) => {
  const complainID = req.body;
  complaintService.resolveComplain(complainID,res)
};

exports.inprocessComplain = (req,res,next) =>{
/*  req.on('data',()=>{const complainID = req.body;});
  req.on('end',()=>{complaintService.inprocessComplain(complainID,res)})*/
  const complainID = req.body;
  complaintService.inprocessComplain(complainID,res)
};