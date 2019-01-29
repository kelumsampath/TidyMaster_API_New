const express = require('express');
const router = express.Router();
const datamodelds = require('../../datamodels/user');
const tokenmodels = require('../../datamodels/token');
const jobmodel = require('../../datamodels/job')
const token = require('../../config/token');

module.exports = router;

router.get('/', (req, res) => {
  res.send("Hello cleaner!");
});


router.post('/getalljobs', (req, res) => {

  jobmodel.getalljobs((err, jobs) => {
    if (err) {
      //console.log(err);
      res.send({ state: false, msg: "Server error" });
    } else {
      res.send({ state: true, jobs: jobs });
    }
  })
});




router.post('/viewjob', (req, res) => {
  //console.log(req.body.postid)

  jobmodel.viewjob(req.body.postid, (err, job) => {
    if (err) {
      //console.log(err);
      res.send({ state: false, msg: "Server error" });
    } else {
      res.send({ state: true, job: job });
    }
  })
});


router.post('/applyjob', token.verifytoken, (req, res) => {
  // console.log(req.body.jobid);
  //console.log(req.user);
  const applydata = {
    uid: req.user.uid,
    postid: req.body.postid
  }
  jobmodel.applyforjob(applydata, (err, user) => {
    if (err) {
      res.send({ state: false, msg: "Server error" });
    } else {
      res.send({ state: true, msg: "successfully apply for the jobid " });
    }
  })

});

router.post('/iscleaner', token.verifytoken, (req, res) => {
  var userdata = req.user;
  //console.log(userdata)
  if (userdata.role == "cleaner") {
    res.send({ state: true, msg: "this is a cleaner " });
  } else {
    res.send({ state: false, msg: "this is not a cleaner " });
  }
});


router.post('/getallpaidjobs', (req, res) => {

  jobmodel.getallpaidjobs((err, jobs) => {
    if (err) {
      //console.log(err);
      res.send({ state: false, msg: "Server error" });
    } else {
      res.send({ state: true, jobs: jobs });
    }
  })
});

router.post('/getallnonpaidjobs', (req, res) => {

  jobmodel.getallnonpaidjobs((err, jobs) => {
    if (err) {
      //console.log(err);
      res.send({ state: false, msg: "Server error" });
    } else {
      res.send({ state: true, jobs: jobs });
    }
  })
});

router.post('/getallpaidjobs', (req, res) => {

  jobmodel.getallpaidjobs((err, jobs) => {
    if (err) {
      //console.log(err);
      res.send({ state: false, msg: "Server error" });
    } else {
      res.send({ state: true, jobs: jobs });
    }
  })
});

router.post('/getappliedjobs',token.verifytoken, (req, res) => {
  var userdata = req.user;
  jobmodel.getcleanerappliedjobs(userdata.uid,(err, jobs) => {
    if (err) {
      //console.log(err);
      res.send({ state: false, msg: "Server error" });
    } else {
      res.send({ state: true, jobs: jobs });
    }
  })
});

router.post('/getdonejobs',token.verifytoken, (req, res) => {
  var userdata = req.user;
  jobmodel.getcleanerdonejobs(userdata.uid,(err, jobs) => {
    if (err) {
      //console.log(err);
      res.send({ state: false, msg: "Server error" });
    } else {
      res.send({ state: true, jobs: jobs });
    }
  })
});

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

  router.post('/cleanerrunningjobs',token.verifytoken,(req,res)=>{
    
    jobmodel.getcleanerrunningjobs(req.user.uid,(err,jobs)=>{
      if(err){
        console.log(err);
        res.send({state:false,msg:"db error"});
      }else{
        res.send({state:true,customerjobs:jobs});
      }
    })
  })

  router.post('/customerprofile',token.verifytoken,(req,res)=>{
    
    jobmodel.customerprofile(req.body.customerid,(err,jobs)=>{
      if(err){
        console.log(err);
        res.send({state:false,msg:"db error"});
      }else{
        res.send({state:true,customerjobs:jobs});
      }
    })
  })

  router.post('/ratecustomer',token.verifytoken, (req, res) => {
    var userdata = req.user;
    var data={
      udi:req.body.uid,
      rate:req.body.rate
    }
    //console.log(req.body.postid)
    jobmodel.ratecustomer(data,(err, abc) => {
      if (err) {
        //console.log(err);
        res.send({ state: false, msg: "Server error" });
      } else {
        res.send({ state: true, msg:"customer rated" });
      }
    })
  });


  router.post('/getalljobs2', (req, res) => {

    jobmodel.getalljobs2((err, jobs) => {
      if (err) {
        //console.log(err);
        res.send({ state: false, msg: "Server error" });
      } else {
        res.send({ state: true, jobs: jobs });
      }
    })
  });