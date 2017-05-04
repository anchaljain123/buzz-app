const mongoose = require('mongoose');

const productSchema = new  mongoose.Schema({
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
    profile:{}
});

module.exports = mongoose.model('User',productSchema);