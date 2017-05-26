const mongoose = require('mongoose');
const likeSchema = new mongoose.Schema({
    postId:{
        type:String,
        required:true,
        index:true,
    },
    userDetails:{
        type:Object,
        required:true,
    },
    like:{
        type:Boolean,
    }
},{
    versionKey:false,
});

module.exports = mongoose.model('Like',likeSchema);