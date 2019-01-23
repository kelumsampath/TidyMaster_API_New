const express = require('express');
const router = express.Router();
const datamodelds = require('../../datamodels/user');
const tokenmodels = require('../../datamodels/token');
const jobmodel = require('../../datamodels/job')
const token = require('../../config/token');

module.exports = router;

router.get('/',(req,res)=>{
    res.send("Hello customer!");
  });

  router.post('/jobpost',token.verifytoken,(req,res)=>{
    //console.log(req.user);
     //console.log(req.body);
     const job={
       uid:req.user.uid,
       catogaryname:req.body.catogaryname,
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


   // get all the jobs put by customer 

router.post('/viewcusjob',token.verifytoken,(req,res)=>{
    const user = {
      uid:req.user.uid
    }
    jobmodel.findcustomeralljobs(user,(err,jobs)=>{
      if(err){
        console.log(err);
        res.send({state:false,msg:"db error"});
      }else{
        res.send({state:true,customerjobs:jobs});
      }
    })
  })

  // find customer active job 

router.post('/viewactivejob',token.verifytoken,(req,res)=>{
  const user = {
    uid:req.user.uid
  }
  jobmodel.findcustomeractivejobs(user,(err,jobs)=>{
    if(err){
      console.log(err);
      res.send({state:false,msg:"db error"});
    }else{
      res.send({state:true,customerjobs:jobs});
    }
  })
})

  // find customer completed job 

  router.post('/viewcompletedjob',token.verifytoken,(req,res)=>{
    const user = {
      uid:req.user.uid
    }
    jobmodel.findcustomercompletedjobs(user,(err,jobs)=>{
      if(err){
        console.log(err);
        res.send({state:false,msg:"db error"});
      }else{
        res.send({state:true,customerjobs:jobs});
      }
    })
  })


  // get details of singhe job

  router.post('/singlejob',(req,res)=>{
    
    jobmodel.singlejob(req.body.postid,(err,job)=>{
      if(err){
        console.log(err);
        res.send({state:false,msg:"db error"});
      }else{
        res.send({state:true,customerjobs:job});
      }
    })
  })

  router.post('/iscustomer', token.verifytoken, (req, res) => {
    var userdata = req.user;
    //console.log(userdata)
    if (userdata.role == "customer") {
      res.send({ state: true, msg: "this is a customer " });
    } else {
      res.send({ state: false, msg: "this is not a customer " });
    }
  });

  router.post('/getappliedcleaners',token.verifytoken, (req, res) => {
    var userdata = req.user;
    //console.log(req.body.postid)
    jobmodel.getappliedcleaners(req.body.postid,(err, cleaners) => {
      if (err) {
        //console.log(err);
        res.send({ state: false, msg: "Server error" });
      } else {
        res.send({ state: true, cleaners: cleaners });
      }
    })
  });

  router.post('/viewcategory',token.verifytoken, (req, res) => {
    var userdata = req.user;
    //console.log(req.body.postid)
    jobmodel.viewcategory((err, category) => {
      if (err) {
        //console.log(err);
        res.send({ state: false, msg: "Server error" });
      } else {
        res.send({ state: true, categorylist: category });
      }
    })
  });

  router.post('/selectcleanerforjob',token.verifytoken, (req, res) => {
    var userdata = req.user;
    var data={
      cleanerid:req.body.cleanerid,
      postid:req.body.postid
    }
    //console.log(req.body.postid)
    jobmodel.selectcleanerforjob(data,(err, abc) => {
      if (err) {
        //console.log(err);
        res.send({ state: false, msg: "Server error" });
      } else {
        res.send({ state: true, msg:"cleaner selected" });
      }
    })
  });