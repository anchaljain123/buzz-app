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
      type:String,
      default:'Pending'
    },

});

module.exports = mongoose.model('Complain',complaintSchema);