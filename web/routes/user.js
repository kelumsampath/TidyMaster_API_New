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
const multer  = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads/');
  },
  filename: function (req, file, callback) {
    callback(null, "aw.jpg");
  }
});
const upload = multer({ storage: storage })

module.exports = router;

router.get('/',(req,res)=>{
    res.send("Hello user!");
  });

  router.post('/register',(req,res)=>{
    //console.log(req.body);
    var public_id,url;
    cloudinary.defaultuser((callb)=>{
      //console.log(callb.public_id)
      //console.log(callb.url)
      public_id=callb.public_id;
      url=callb.url;
  
    var genpassword;
    genaratePassword.genaratepass((pass)=>{
      console.log(url);
      genpassword=pass;
    })
   const regUser = {
      firstname:req.body.firstname,
      lastname:req.body.lastname,
      username:req.body.username,
      email:req.body.email,
      nic:req.body.nic,
      photoId:public_id,
      photourl:url,
      gender:req.body.gender,
      telephone:req.body.phoneno,
      password:genpassword,
      role:req.body.role,
      address:req.body.address
    };
    console.log(regUser);
    datamodelds.dbSave(regUser,(err,user)=>{
      if(err){
        cloudinary.deleteimage(public_id,(callbk)=>{
          if (err.code === 'ER_DUP_ENTRY' ) {
              console.log('There was a duplicate key error');
              res.json({state:false,msg:"Duplicate user name error!"})
          }else{
            res.json({state:false,msg:"server error occured!!"});
          } 
      
        })
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

router.post('/editprofile',token.verifytoken,(req,res)=>{
  const userdata = {
    uid:req.user.uid,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    username:req.body.username,
    email:req.body.email,
    nic:req.body.nic,
    gender:req.body.gender,
    telephone:req.body.phoneno,
    address:req.body.address
  };
  datamodelds.editprofile(userdata,(err,user)=>{
    if(err){
      res.json({state:false,msg:"User profile not edited!"});
    }else{
      res.json({state:true,msg:"User profile edited!"});
    }
  })

});

router.post('/editpassword',token.verifytoken,(req,res)=>{
  //console.log(req.user)
  const mypass = {
    uid:req.user.uid,
    oldpassword:req.body.oldpassword,
    newpassword:req.body.newpassword
  };

  datamodelds.searchUserById(mypass.uid,function(err,user){
    if(err){
      res.json({state:false,msg:"server error occured!!"});
      }

    if(user){
      //console.log(user);
      datamodelds.matchpassword(mypass.oldpassword,user.password,function(err,match){
        if(err) {
          res.json({state:false,msg:"server error occured!!"});
        }
        if(match){
          datamodelds.editpassword(mypass,(err,resp)=>{
            if(err){
              res.json({state:false,msg:"User password does not changed!"});
            }else{
              res.json({state:true,msg:"User password changed!"});
            }
          })
        }else{
          res.json({state:false,msg:"Wrong password!"});
        }
      })
      
    }else{
      res.json({state:false,msg:"No user found!"});
    }
  })
});


router.post('/profpicchange',upload.single('editprofpic'),token.verifyfiletoken,(req,res)=>{
  var filepath=req.file.path;
  //console.log(req.user);
  datamodelds.searchUser(req.user.username,(err,user)=>{
    if(err){
     res.json({state:false});
    }else{
      const oldpicid=user.photoId;
      cloudinary.deleteimage(oldpicid,(callb)=>{
        cloudinary.storeimage(filepath,(callb2)=>{
          //console.log(callb2.public_id)
          //console.log(callb2.url)
          var updatedata={
            uid:req.user.uid,
            pic_id:callb2.public_id,
            pic_url:callb2.url
          }
          datamodelds.profpicupdate(updatedata,(err,success)=>{
            if(err){
              res.json({state:false,msg:"server error occured!!"});
            }else{
              res.json({state:true,msg:"User profile changed!"});
            }
          })
        })
      })
      
    }
  })
  
 });



