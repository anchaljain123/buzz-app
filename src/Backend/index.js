const express = require('express');
const cors=require('cors');
const path = require('path');
const constants  = require('./config/constant');
const webpack = require('webpack');
const webpackFile = require('../../webpack.config');
const webpackMiddleware = require('webpack-dev-middleware');
const appConfig = require('./config/app');
const PORT =  constants.PORT ;

const app = express();
const compiler = webpack(webpackFile);

app.use(webpackMiddleware(compiler));

app.use('/files', express.static('files'));
app.use(cors({origin:true,credentials:true}));


appConfig.appStarted(app);


app.use('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

app.listen(PORT,()=>{
    console.log('Listening on port %d',PORT);
});