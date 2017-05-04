const mongoose = require('mongoose');
const constants = require('./constant');
const mongoURI = constants.mongoURI;
mongoose.connect(mongoURI);
const db = mongoose.connection;

db.on('open',(err,data)=>{
    if(err) console.log(err);
    console.log("Connected to Database");
});

db.on('error',(err,data)=>{
    if(err) console.log(err);
    console.log("Could not connect to Database");
});
