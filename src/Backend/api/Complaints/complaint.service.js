const Complain = require('./complaint.model');

exports.saveComplain = function (complainDetails, res) {

    Complain.create(complainDetails, (err, data) => {
        if (err) {
            res.send({msg: err});
        }
        else {
            res.send(data);
        }
    })
};

exports.getComplain = function (res) {

    Complain.find({}, (err, data) => {
        if (err) {
            res.send({msg: err});
        }
        else {
            res.send(data);
        }
    })
};

exports.deleteComplain = function (complainID, res) {
    Complain.remove({'_id': complainID.id}, (err, data) => {
        if (err) {
            res.send({msg: err});
        }
        else {
            res.send(data)
        }
    })
};

exports.resolveComplain = (complainID, res) => {
    Complain.update({'_id': complainID.id}, {$set: {'status': 'Resolved'}}, (err, data) => {
        if (err) {
            res.send({msg: err});
        }
        else {
            Complain.find({}, (err, data) => {
                if (err) {
                    res.send({msg: err});
                }
                else {
                    res.send(data);
                }
            })
        }
    })
};

exports.inprocessComplain = (complainID, res) => {
    Complain.update({'_id': complainID.id}, {$set: {'status': 'Inprocess'}}, (err, data) => {
        if (err) {
            res.send({msg: err});
        }
        else {
            this.getComplain(res)
        }
    })
};
