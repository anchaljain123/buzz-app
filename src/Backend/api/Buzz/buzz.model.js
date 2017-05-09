const mongoose = require('mongoose');
const categoryType = ['lostnfound','activity'];

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
        enum:categoryType,
    },
    userDetails:{
        type:Array,
    }


})

module.exports = mongoose.model('Buzz',buzzSchema);