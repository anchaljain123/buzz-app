const mongoose = require('mongoose');
const likeSchema = new mongoose.Schema({
    postId:{
        type:String,
        required:true,
    },
    userDetails:{
        type:Object,
        required:true,
    },
    like:{
        type:Boolean,
        default:true,
    }
},{
    versionKey:false,
})

module.exports = mongoose.model('Like',likeSchema);