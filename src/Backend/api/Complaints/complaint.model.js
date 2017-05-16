const mongoose  = require('mongoose');

const complaintSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    category:{
        type:String,
    },
    complainCreated:{
        type:Date,
    },
    complainUpdated:{
        type:Date,
    },
    userDetails:{
        type:Object
    } ,
    status:{

    },

})

module.exports = mongoose.model('Complain',complaintSchema);