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
       username:req.user.username,
       catname:req.body.catname,
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


  // get details of singhe job

  router.post('/singlejob',token.verifytoken,(req,res)=>{
    const job = {
      jobid:req.user.jobid
    }
    jobmodel.findcustomeractivejobs(job,(err,job)=>{
      if(err){
        console.log(err);
        res.send({state:false,msg:"db error"});
      }else{
        res.send({state:true,customerjobs:job});
      }
    })
  })
