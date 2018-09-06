const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportlocal = require('passport-local');
const passportjwt = require('passport-jwt');
var blacklist = require('express-jwt-blacklist');
var jwtp = require('express-jwt');
const session = require('express-session');
const cors = require('cors');

const router = express.Router();
const datamodelds = require('../../datamodels/user');
const tokenmodels = require('../../datamodels/token');
const token = require('../../config/token');

router.get('/',(req,res)=>{
  res.send("Hello Tidyclean!");
});

router.get('/a',(req,res)=>{
  res.send("Hello Tidyclean!");
});

router.get('/b',(req,res)=>{
  res.send("Hello Tidyclean!");
});
router.get('/c',(req,res)=>{
  res.send("Hello Tidyclean!");
});

router.post('/register',(req,res)=>{
  //console.log(req.body);
 const regUser = {
    fullname:req.body.fullname,
    username:req.body.username,
    email:req.body.email,
    phoneno:req.body.phoneno,
    password:req.body.password
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
      res.json({state:true,msg:"data inserted!"})
    }
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
          fullname:user.fullname,
          username:user.username,
          email:user.email,
          phoneno:user.phoneno,
          password:user.password,
           };
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
                  id: user._id,
                  fullname:user.fullname,
                  username:user.username,
                  email:user.email,
                  phoneno:user.phoneno,
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
  res.json(userdata);

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





module.exports = router;