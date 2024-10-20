const express = require('express');
const { usersData } = require('../meta/userData');
const app = express();
const Router = express.Router();


// Router.get('/all',(req,res)=>{
//     res.send("All Users")
// })

Router.get('/new',(req,res)=>{
    res.send("New User")
})


// post

Router.get('/:userID',(req,res)=>{
    try {
        if(req.params.userID != undefined){
            if(req.params.userID == 'all'){
                res.json(usersData);
                return null
            }
           
            if(isNaN(Number(req.params.userID))){
                throw new Error("Invaild data")
            }
            res.send(usersData?.[Number(req.params.userID)])
        }
    } catch (error) {
        res.sendStatus(500).send(error);
    }

})

// Router.param('name',(req,res,next,id)=>{
//     console.log(req);
// })

module.exports  = Router