const express = require('express');
const router = express.Router();
const datamodelds = require('../../datamodels/user');
const tokenmodels = require('../../datamodels/token');
const venderadmodel = require('../../datamodels/vendorAd')
const token = require('../../config/token');

module.exports = router;

router.get('/', (req, res) => {
  res.send("Hello addprovider!");
});

router.post('/adadvertiser', (req, res) => {
  //console.log(req.body);
  var genpassword;
  genaratePassword.genaratepass((pass) => {
    console.log(pass);
    genpassword = pass;
  })
  const advertiser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    nic: req.body.nic,
    photoId: "toBeAdd",
    gender: req.body.gender,
    telephone: req.body.phoneno,
    password: genpassword,
    role: req.body.role,
    address: req.body.address,
    company : req.body.company
  };
  //console.log(regUser);
  datamodelds.saveadvertiser(advertiser, (err, user) => {
    if (err) {

      if (err.code === 'ER_DUP_ENTRY') {
        console.log('There was a duplicate key error');
        res.json({ state: false, msg: "Duplicate user name error!" })
      } else {
        res.json({ state: false, msg: "server error occured!!" });
      }


    } else {
      var userdata = {
        email: regUser.email,
        username: regUser.username,
        password: genpassword
      }
      email.unamepasssend(userdata, (err, resp) => {
        if (err) {
          res.json({ state: false, msg: "Server Error!!" });
        } else {
          res.json({ state: true, msg: "Your password has been send to the email!" });
        }
      })
    }
  })
});

router.post('/getAllAds',(req,res)=>{
  //console.log(req.body.postid)

  venderadmodel.getAllAds(req.body.username,(err,job)=>{
   if(err) {
     //console.log(err);
     res.send({state:false,msg:"Server error"});
   }else{   
     console.log(adproviderid);
   res.send({state:true,ad:ad});
   }
 }) 
});

router.post('/getDailyViews',(req,res)=>{
  //console.log(req.body.postid)

  venderadmodel.getDailyViews(req.body.adId,(err,job)=>{
   if(err) {
     //console.log(err);
     res.send({state:false,msg:"Server error"});
   }else{   
   res.send({state:true,ad:ad});
   }
 }) 
});

router.post('/getAllAdsByMonth',token.verifytoken,(req,res)=>{
 
  var userdata = req.user;
  console.log(userdata.username);
  venderadmodel.getAllAdsByMonth(userdata.username,(err,active)=>{
   if(err) {
  
     res.send({state:false,msg:"Server error"});
   }else{   
    
   res.send({state:true,ad:active});
   }
 }) 
});