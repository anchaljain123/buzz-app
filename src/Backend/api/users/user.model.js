const mongoose = require('mongoose');

const userScheme = new  mongoose.Schema({
    id:{
       type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
    },
    emailID:{
        type:String,
        required:true,
    },
    role:{
        type:String,
    },
    profile:{}
});

module.exports = mongoose.model('User',userScheme);