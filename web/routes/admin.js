const express = require('express');
const router = express.Router();
const datamodelds = require('../../datamodels/user');
const tokenmodels = require('../../datamodels/token');
const jobmodel = require('../../datamodels/job')
const token = require('../../config/token');
const email=require('./../../thirdparty/sendgrid');
const genaratePassword = require('../../thirdparty/genarate-password');

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
    //console.log(userdata)
    if(userdata.role=="admin"){
      res.send({state:true,role:"admin",msg:"this is a admin user "});
    }else if(userdata.role=="superadmin"){
      res.send({state:true,role:"admin",msg:"this is a superadmin user "});
    }else{
      res.send({state:false,msg:"this is not a admin user "});
    }
  });
  
  router.post('/issuperadmin',token.verifytoken,(req,res)=>{
    var userdata = req.user;
    if(userdata.role=="superadmin"){
      res.send({state:true,msg:"this is a superadmin user "});
    }else{
      res.send({state:false,msg:"this is not a superadmin user "});
    }
  });

  router.post('/specialuser',token.verifytokenaccess,(req,res)=>{
    var genpassword;
    genaratePassword.genaratepass((pass)=>{
      console.log(pass);
      genpassword=pass;
    })
   const regUser = {
      firstname:req.body.firstname,
      lastname:req.body.lastname,
      username:req.body.username,
      email:req.body.email,
      nic:req.body.nic,
      photoId:"toBeAdd",
      gender:req.body.gender,
      telephone:req.body.phoneno,
      password:genpassword,
      role:req.body.role,
      address:req.body.address,
      company:req.body.company 
    };
    //console.log(regUser);
    datamodelds.dbSavespecialuser(regUser,(err,user)=>{
      if(err){
        
          if (err.code === 'ER_DUP_ENTRY' ) {
              //console.log('There was a duplicate key error');
              res.json({state:false,msg:"Duplicate user name error!"})
          }else{
            res.json({state:false,msg:"server error occured!!"});
          } 
      
        
      }else{
        var userdata={
          email:regUser.email,
          username:regUser.username,
          password:genpassword
        }
        email.unamepasssend(userdata,(err,resp)=>{
          if(err){
            res.json({state:false,msg:"Server Error!!"});
          }else{
              res.json({state:true,msg:"Your password has been send to the email!"});
            }
          })
      }
    })
  });