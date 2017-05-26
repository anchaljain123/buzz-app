const mongoose  = require('mongoose');

const complaintSchema = new mongoose.Schema({
    title:String,
    description:String,
    category:{
        type:String,
      index:true,
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