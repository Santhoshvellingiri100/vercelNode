const express = require('express');
const { usersData } = require('../meta/userData');
const app = express();
const Router = express.Router();
const Path = require('path');


Router.get('/download',(req,res)=>{
 try {
    if(req.query.key == 123456789){
        const fileName = 'image.jpg';
        const filePath = Path.join(__dirname, "..",'assets', fileName);
        res.download(filePath)
    }else{
        throw new Error('Provide Key')
    }
 } catch (error) {
    res.sendStatus(500).send(error);
 }
})



module.exports  = Router