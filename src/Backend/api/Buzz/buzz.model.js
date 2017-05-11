const mongoose = require('mongoose');
const categoryType = ['lostnfound','activity'];

const buzzSchema = new mongoose.Schema({
        content:{
            type:String
        },
        img:{
            // type:String,
        },
        postCreated:{
            type: Date,
            required: true,
        },
        category:{
            type:String,
            enum:categoryType,
            default:'activity',

        },
        userDetails:{
            type:Object,
            required:true,
        },


    },
    {
        versionKey:false,
    }
)



module.exports = mongoose.model('Buzz',buzzSchema);

