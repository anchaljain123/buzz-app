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
    comment:{
        type:String,
    },
    commentCreated:{
        type:Number,
        default:Date.now(),
    }
},{
    versionKey:false,
});

commentSchema.post('remove',() => {
  console.log('comments has been removed');
});
module.exports = mongoose.model('Comment',commentSchema);
