const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const datamodelds = require('../../datamodels/user');
const tokenmodels = require('../../datamodels/token');
const jobmodel = require('../../datamodels/job')
const token = require('../../config/token');
const email=require('./../../thirdparty/sendgrid');
const genaratePassword = require('../../thirdparty/genarate-password');
const cloudinary=require('./../../thirdparty/cloudinary');

module.exports = router;

router.get('/',(req,res)=>{
    res.send("Hello user!");
  });

  router.post('/register',(req,res)=>{
    //console.log(req.body);
    var public_id,url;
    cloudinary.defaultuser((callb)=>{
      console.log(callb.public_id)
      console.log(callb.url)
      public_id=callb.public_id;
      url=callb.url;
  
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
      photoId:public_id,
      gender:req.body.gender,
      telephone:req.body.phoneno,
      password:genpassword,
      role:req.body.role,
      address:req.body.address
    };
    //console.log(regUser);
    datamodelds.dbSave(regUser,(err,user)=>{
      if(err){
        
          if (err.code === 'ER_DUP_ENTRY' ) {
              console.log('There was a duplicate key error');
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
  })
  });

router.post('/login',(req,res)=>{
    //res.send("Hello login!");
    const username = req.body.username;
    const password = req.body.password;
  
    datamodelds.searchUser(username,function(err,user){
      if(err){
        res.json({state:false,msg:"server error occured!!"});
        }
  
      if(user){
        //console.log(user);
        datamodelds.matchpassword(password,user.password,function(err,match){
          if(err) {
            res.json({state:false,msg:"server error occured!!"});
          }
          if(match){
            //console.log({user});
           // res.json({state:true,msg:"Username, password mached!"});
           const obj = { uid: user.uid,
            firstname:user.firstName,
            username:user.username,
            email:user.email,
            phoneno:user.telephone,
            role:user.rolename,
             };
             //console.log(obj)
        const newtoken = jwt.sign(obj,token.secrete,(err,newtoken)=>{
          if(err) {
            res.json({state:false,msg:"server error occured!!"});
          }
          else{
            const newtoken2 = {
              uid:user.uid,
              token: newtoken
            };
            
            tokenmodels.tokenSave(newtoken2,(err,saved)=>{
              if(err) {
                if (err.code === 'ER_DUP_ENTRY' ) {
                //console.log('There was a duplicate key error');
                res.json({state:false,msg:"Duplicate key error!"})
                }else{
                res.json({state:false,msg:"server error occured!!"});
               } 
              }
              else{
                  res.json({
                  state:true,
                  token:"Bearer "+newtoken,
                  user:{
                    id: user.uid,
                    role:user.rolename
                  }
                });
              }
              });
          }
        });
          }else{
            res.json({state:false,msg:"Wrong password!"});
          }
        })
        
      }else{
        res.json({state:false,msg:"No user found!"});
      }
    })
  
  });

  router.get('/profile',token.verifytoken,(req,res)=>{
    var userdata = req.user;
    //console.log(req.session);
    datamodelds.searchUser(userdata.username,(err,user)=>{
      if(err) {
        res.json({state:false,msg:"server error occured!!"});
      }else{
        res.json({state:false,userdata:user});
      }
    })
   // res.json(userdata);
  
  });

  router.get('/about',token.verifytoken,(req,res)=>{
    var userdata = req.user;
    res.send("I'm "+userdata.fullname+". my user name is "+userdata.username);
  });
  
  router.get('/logout',token.verifytoken,(req,res)=>{
    const token = req.token;
    //console.log(token);
    tokenmodels.revokeToken(token,(err,removed)=>{
      if(err) {
        res.json({state:false,msg:"server error occured!!"});
      }
      else if(removed){
        res.json({state:true,msg:"successfully loged out!"});
      }else{
        res.json({state:false,msg:"no token found to revoke!"});
      }
    })
  
});

