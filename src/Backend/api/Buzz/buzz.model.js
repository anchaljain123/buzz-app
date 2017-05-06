const mongoose = require('mongoose');
const buzzSchema = new mongoose.Schema({
    content:{
        type:String
    },
    img:{

    },
    postCreated:{
        type:Date,
    },
    category:{
        type:String,
    },
    userDetails:{
        type:Array,
    }


})

module.exports = mongoose.model('Buzz',buzzSchema);