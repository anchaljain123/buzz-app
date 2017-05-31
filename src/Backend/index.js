const express = require('express');
const cors=require('cors');
const constants  = require('./config/constant');

const appConfig = require('./config/app');
const PORT =  constants.PORT ;

const app = express();

app.use('/files', express.static('files'));
app.use(cors({origin:true,credentials:true}));


appConfig.appStarted(app);

app.listen(PORT,()=>{
    console.log('Listening on port %d',PORT);
});