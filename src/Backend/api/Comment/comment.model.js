const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    postId:{
        type:String,
        required:true,
    },
    userDetails:{
        type:Object,
        required:true,
    },
    content:{
        type:String
    },
    commentCreated:{
        type:Number,
        default:Date.now(),
    }
},{
    versionKey:false,
})


module.exports = mongoose.model('Comment',commentSchema);
