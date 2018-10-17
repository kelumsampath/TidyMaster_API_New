const express = require('express');
const router = express.Router();
const datamodelds = require('../../datamodels/user');
const tokenmodels = require('../../datamodels/token');
const jobmodel = require('../../datamodels/job')
const token = require('../../config/token');

module.exports = router;

router.get('/',(req,res)=>{
    res.send("Hello admin!");
  });

  router.post('/adminalljobs',(req,res)=>{
 
    jobmodel.adminalljobs((err,jobs)=>{
      if(err) {
        //console.log(err);
        res.send({state:false,msg:"Server error"});
      }else{   
      res.send({state:true,jobs:jobs});
      }
    }) 
   });

   router.post('/acceptpost',(req,res)=>{
    const postdata={
      "postid":req.body.postid,
      "status":"accepted",
      "adminid":'A001',
      "reason":req.body.reason
    }
    //console.log(postdata)
    
   jobmodel.changepoststatus(postdata,(err,msg)=>{
     if(err) {
       //console.log(err);
       res.send({state:false,msg:"Server error"});
     }else{   
     res.send({state:true,msg:"Status changed!"});
     }
   }) 
  });

  router.post('/rejectpost',(req,res)=>{
    const postdata={
      "postid":req.body.postid,
      "status":"rejected",
      "adminid":'A001',
      "reason":req.body.reason
    }
   jobmodel.changepoststatus(postdata,(err,msg)=>{
     if(err) {
       //console.log(err);
       res.send({state:false,msg:"Server error"});
     }else{   
     res.send({state:true,msg:"Status changed!"});
     }
   }) 
  });
  

  router.post('/pendingpost',(req,res)=>{
    const postdata={
      "postid":req.body.postid,
      "status":"pending",
      "adminid":'A001',
      "reason":req.body.reason
    }
   jobmodel.changepoststatus(postdata,(err,msg)=>{
     if(err) {
       //console.log(err);
       res.send({state:false,msg:"Server error"});
     }else{   
     res.send({state:true,msg:"Status changed!"});
     }
   }) 
  });

  router.post('/isadmin',token.verifytoken,(req,res)=>{
    var userdata = req.user;
    console.log(userdata)
    if(userdata.role=="admin"){
      res.send({state:true,msg:"this is a admin user "});
    }else{
      res.send({state:false,msg:"this is not a admin user "});
    }
  });
  