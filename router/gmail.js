const express = require('express');
const { helloword,SentNodeMail} = require('../modules/sentGmail');
const app = express();
const Router = express.Router();


Router.get('/sent',async(req,res)=>{
 try {

    const adminMail = req.query.adminMail;

    let passcode = '';
    if(req.query.ispasscode == "true"){
         passcode = req.query.ispasscode
    }else{
        passcode = 'zzcbqbpejhsmftup';
    }
    const to = JSON.parse(req.query.to);
    const subject = req.query.subject;
    const from = req.query.from;
    const content = req.query.content;
    const html = req.query.html;
   console.log('>>> ✅',to,to?.length)
    // const 
    if(adminMail != undefined && passcode != undefined &&  to != undefined){
        const sentValue =  await SentNodeMail(adminMail,passcode,to,subject,content,html);
        if(!!sentValue.messageId){
            res.status(200).send(sentValue);
        }
    }else{
        res.sendStatus(500).send({message:"Invalid Data"});
    }

   

 } catch (error) {
    res.sendStatus(500).send(error);
 }
})



module.exports  = Router