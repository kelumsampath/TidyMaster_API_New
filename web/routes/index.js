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
const jobmodel = require('../../datamodels/job')
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

router.post('/job/jobpost',token.verifytoken,(req,res)=>{
 // console.log(req.user);
  //console.log(req.body);
  const job={
    customerid:"aaa",
    catid:'CAT001',
    status:"pending",
    title:req.body.jobtitle,
    levelofjob:req.body.levelofjob,
    gender:req.body.gender,
    numberofcleaners:req.body.numberofcleaners,
    priceperhour:req.body.priceperhour,
    estimatedtime:req.body.estimatedtime,
    timeforstartjob:req.body.timeforstartjob,
    joblocation:req.body.joblocation,
    jobdate:req.body.jobdate,
    paymentstatus:'N'
  }
  jobmodel.jobsave(job,(err,msg)=>{
    if(err) {
      console.log(err);
      res.send({state:false,msg:"sdsdss"});
    }else{   
    res.send({state:true,msg:"sdsdss"});
    }
  })
  
});

router.post('/job/getalljobs',(req,res)=>{
 
  jobmodel.getalljobs((err,jobs)=>{
    if(err) {
      //console.log(err);
      res.send({state:false,msg:"Server error"});
    }else{   
    res.send({state:true,jobs:jobs});
    }
  }) 
 });

 router.post('/job/viewjob',(req,res)=>{
   //console.log(req.body.postid)
 
  jobmodel.viewjob(req.body.postid,(err,job)=>{
    if(err) {
      //console.log(err);
      res.send({state:false,msg:"Server error"});
    }else{   
    res.send({state:true,job:job});
    }
  }) 
 });

 router.post('/job/adminalljobs',(req,res)=>{
 
  jobmodel.adminalljobs((err,jobs)=>{
    if(err) {
      //console.log(err);
      res.send({state:false,msg:"Server error"});
    }else{   
    res.send({state:true,jobs:jobs});
    }
  }) 
 });

 router.post('/admin/acceptpost',(req,res)=>{
   const postdata={
     "postid":req.body.postid,
     "status":"accepted"
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

 router.post('/admin/rejectpost',(req,res)=>{
  const postdata={
    "postid":req.body.postid,
    "status":"rejected"
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

router.post('/admin/pendingpost',(req,res)=>{
  const postdata={
    "postid":req.body.postid,
    "status":"pending"
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



module.exports = router;