const express = require('express');
// const serverless = require("serverless-http");
const userRoute = require('./router/users')
const fileRoute = require('./router/fileDownload')
const gmail = require('./router/gmail')
const app = express();

app.get('/',(req,res)=>{
    res.jsonp({data:"hello santhosh"});
})

app.use('/user',userRoute);
app.use('/file',fileRoute);
app.use('/gmail',gmail);


// serving

const PORT = 3000;
const HOST = '0.0.0.0'
app.listen(PORT,HOST,()=>{
    console.log('Server is running on <Your Ip>:'+PORT);

})

// module.exports.handler = serverless(app)