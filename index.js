const express = require('express');
// const serverless = require("serverless-http");
const userRoute = require('./router/users')
const fileRoute = require('./router/fileDownload')
const gmail = require('./router/gmail');
const { default: rateLimit } = require('express-rate-limit');
const app = express();


const limiter = rateLimit({
     
	windowMs: 1 * 60 * 1000, // 15 minutes
     limit:5,
      message: "Too many requests from this IP, please try again after a minute for next set",
})
app.use('/',limiter);



//  routes

// testiing
app.get('/',(req,res)=>{
    res.jsonp({data:"hello santhosh"});
})

// routers
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