const express = require('express');
const router = express.Router();
const datamodelds = require('../../datamodels/user');
const tokenmodels = require('../../datamodels/token');
const advertismentmodel = require('../../datamodels/advertisment');
const jobmodel = require('../../datamodels/job')
const token = require('../../config/token');
const email = require('./../../thirdparty/sendgrid');
const genaratePassword = require('../../thirdparty/genarate-password');
const cloudinary = require('./../../thirdparty/cloudinary');
var multer = require('multer')
//var upload = multer({ dest: 'uploads/' })

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads/');
  },
  filename: function (req, file, callback) {
    callback(null, "advertisment.jpg");
  }
});
const upload = multer({ storage: storage })

module.exports = router;

router.get('/', (req, res) => {

  res.send("Hello admin!");
});

router.post('/adminalljobs', (req, res) => {

  jobmodel.adminalljobs((err, jobs) => {
    if (err) {
      //console.log(err);
      res.send({ state: false, msg: "Server error" });
    } else {
      res.send({ state: true, jobs: jobs });
    }
  })
});
router.post('/adminjobsbystatus', (req, res) => {

  jobmodel.adminjobsbystatus(req.body.status, (err, jobs) => {
    if (err) {
      //console.log(err);
      res.send({ state: false, msg: "Server error" });
    } else {
      res.send({ state: true, jobs: jobs });
    }
  })
});

router.post('/acceptpost', token.verifytoken, (req, res) => {
  const postdata = {
    "postid": req.body.postid,
    "status": "accepted",
    "uid": req.user.uid,
    "reason": req.body.reason
  }
  //console.log(postdata)

  jobmodel.changepoststatus(postdata, (err, msg) => {
    if (err) {
      //console.log(err);
      res.send({ state: false, msg: "Server error" });
    } else {
      res.send({ state: true, msg: "Status changed!" });
    }
  })
});

router.post('/rejectpost', token.verifytoken, (req, res) => {
  const postdata = {
    "postid": req.body.postid,
    "status": "rejected",
    "uid": req.user.uid,
    "reason": req.body.reason
  }
  jobmodel.changepoststatus(postdata, (err, msg) => {
    if (err) {
      //console.log(err);
      res.send({ state: false, msg: "Server error" });
    } else {
      res.send({ state: true, msg: "Status changed!" });
    }
  })
});


router.post('/pendingpost', token.verifytoken, (req, res) => {
  const postdata = {
    "postid": req.body.postid,
    "status": "pending",
    "uid": req.user.uid,
    "reason": req.body.reason
  }
  jobmodel.changepoststatus(postdata, (err, msg) => {
    if (err) {
      //console.log(err);
      res.send({ state: false, msg: "Server error" });
    } else {
      res.send({ state: true, msg: "Status changed!" });
    }
  })
});

router.post('/isadmin', token.verifytoken, (req, res) => {
  var userdata = req.user;
  //console.log(userdata)
  if (userdata.role == "admin") {
    res.send({ state: true, role: "admin", msg: "this is a admin user " });
  } else if (userdata.role == "superadmin") {
    res.send({ state: true, role: "admin", msg: "this is a superadmin user " });
  } else {
    res.send({ state: false, msg: "this is not a admin user " });
  }
});

router.post('/issuperadmin', token.verifytoken, (req, res) => {
  var userdata = req.user;
  if (userdata.role == "superadmin") {
    res.send({ state: true, msg: "this is a superadmin user " });
  } else {
    res.send({ state: false, msg: "this is not a superadmin user " });
  }
});

router.post('/specialuser', token.verifytokenaccess, (req, res) => {
  var public_id, url;
  var gend="O";
  if(req.body.gender=="Male"){
    gend="M"
  }else if(req.body.gender=="Female"){
    gend="F"
  }
  cloudinary.defaultuser((callb) => {
    //console.log(callb.public_id)
    //console.log(callb.url)
    public_id = callb.public_id;
    url = callb.url;

    var genpassword;
    genaratePassword.genaratepass((pass) => {
      console.log(pass);
      genpassword = pass;
    })
    const regUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      nic: req.body.nic,
      url:url,
      photoId: public_id,
      gender: gend,
      telephone: req.body.phoneno,
      password: genpassword,
      role: req.body.role,
      address: req.body.address,
      company: req.body.company
    };
    console.log(regUser);
    datamodelds.dbSavespecialuser(regUser, (err, user) => {
      if (err) {
        cloudinary.deleteimage(public_id, (callbk) => {
          if (err.code === 'ER_DUP_ENTRY') {
            //console.log('There was a duplicate key error');
            res.json({ state: false, msg: "Duplicate user name error!" })
          } else {
            res.json({ state: false, msg: "server error occured!!" });
          }
        })

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
  })
});

router.post('/profpic', token.verifytoken, (req, res) => {
  var userdata = req.user;
  datamodelds.searchUser(userdata.username, (err, user) => {
    if (err) {
      res.json({ state: false, msg: "Server Error!!" });
    } else {
      cloudinary.getimageurl(user.photoId, (call) => {
        var data = {
          url: call,
          username: userdata.username
        }
        res.json({ state: true, data: data });
      })

    }
  })
});

router.post('/searchusers', token.verifytokenaccess, (req, res) => {
  datamodelds.searchwebusers(req.body.username, (err, users) => {
    if (err) {
      res.json({ state: false, msg: "Server Error!!" });
    } else {
      //console.log(users.length)
      res.json({ state: true, usercount: users.length, users: users });
    }
  })
});

router.post('/searchusersmob', token.verifytokenaccess, (req, res) => {
  datamodelds.searchwebusersall(req.body.username, (err, users) => {
    if (err) {
      res.json({ state: false, msg: "Server Error!!" });
    } else {
      //console.log(users.length)
      res.json({ state: true, usercount: users.length, users: users });
    }
  })
});

router.post('/removeuser', token.verifytokenaccess, (req, res) => {
  //console.log(req.user)
  datamodelds.searchUserById(req.body.uid, (err, user) => {
    if (err) {

    } else {
      if (req.user.role == 'admin' && (user.rolename == 'admin' || user.rolename == 'superadmin')) {
        res.json({ state: false, msg: "No permision to delete that user!" });
      } else {
        datamodelds.removeuser(req.body.uid, (err, users) => {
          if (err) {
            res.json({ state: false, msg: "Server Error1!!" });
          } else {
            email.removeuser(user, (err, resp) => {
              if (err) {
                res.json({ state: false, msg: "Server Error2!!" });
              } else {
                res.json({ state: true, msg: "user successfuly removed!" });
              }
            })
          }
        })
      }
    }
  })

});

router.post('/warnuser', token.verifytoken, (req, res) => {

  datamodelds.searchUserById(req.body.uid, (err, user) => {
    if (err) {

    } else {
      email.warnuser(user, req.body.reason, (err, resp) => {
        if (err) {
          res.json({ state: false, msg: "Server Error!!" });
        } else {
          res.json({ state: true, msg: "warning email sent to the user!" });
        }
      })
    }
  });
});

router.post('/viewuncheckedcomplains',token.verifytoken, (req, res) => {

  jobmodel.viewcomplains("dd", (err, complain) => {
    if (err) {
      res.json({ state: false, msg: "Server Error!!" });
    } else {
      res.json({ state: true, complains: complain });
    }
  });
});

router.post('/viewcheckedcomplains',token.verifytoken, (req, res) => {

  jobmodel.viewcheckedcomplains("dd", (err, complain) => {
    if (err) {
      res.json({ state: false, msg: "Server Error!!" });
    } else {
      res.json({ state: true, complains: complain });
    }
  });
});


router.post('/complaineduserremove', token.verifytoken, (req, res) => {
  //console.log(req.user)
  datamodelds.searchUserById(req.body.uid, (err, user) => {
    if (err) {
      console.log(err)
      res.json({ state: false, msg: "Server Error0!!" });
    } else {
      if (req.user.role == 'admin' && (user.rolename == 'admin' || user.rolename == 'superadmin')) {
        res.json({ state: false, msg: "No permision to delete that user!" });
      } else {
        datamodelds.removeuser(req.body.uid, (err, users) => {
          if (err) {
            console.log(err)
            res.json({ state: false, msg: "Server Error1!!" });
          } else {
            email.removeuser(user,req.body.reason, (err, resp) => {
              if (err) {
                console.log(err)
                res.json({ state: false, msg: "Server Error2!!" });
              } else {
                var complaindata = {
                  complainid: req.body.complainid,
                  uid: req.user.uid,
                  action: req.body.reason
                }
                jobmodel.complaineduseraction(complaindata, (err, call) => {
                  if (err) {
                    console.log(err)
                    res.json({ state: false, msg: "Server Error3!!" });
                  } else {
                    res.json({ state: true, msg: "user successfuly removed!" });
                  }
                })

              }
            })
          }
        })
      }
    }
  })

});

router.post('/complaineduserwarn', token.verifytokenaccess, (req, res) => {

  datamodelds.searchUserById(req.body.uid, (err, user) => {
    if (err) {

    } else {
      email.warnuser(user, req.body.reason, (err, resp) => {
        if (err) {
          res.json({ state: false, msg: "Server Error!!" });
        } else {
          var complaindata = {
            complainid: req.body.complainid,
            uid: req.user.uid,
            action: req.body.reason
          }
          jobmodel.complaineduseraction(complaindata, (err, call) => {
            if (err) {
              res.json({ state: false, msg: "Server Error3!!" });
            } else {
              res.json({ state: true, msg: "warning email sent to the user!" });
            }
          })
        }
      })
    }
  });
});

router.post('/getalladproviders', (req, res) => {

  datamodelds.getalladproviders("dd", (err, adproviders) => {
    if (err) {
      res.json({ state: false, msg: "Server Error!!" });
    } else {
      res.json({ state: true, addproviders: adproviders });
    }
  });
});

router.post('/postadd', upload.single('addvertiesment'), token.verifyfiletoken, (req, res) => {

  cloudinary.postadd((callb)=>{
   
    var detailsofadd = {
      uid: req.user.uid,
      title: req.body.title,
      venderurl: callb.url,
      advertiser: req.body.advertiser,
      startdate: req.body.startdate,
      imageid:callb.public_id,
      enddate: req.body.enddate
    }
     //console.log(detailsofadd)
    advertismentmodel.postadd(detailsofadd, (err, msg) => {
      if (err) {
        res.json({ state: false, msg: "Server Error!!" });
      } else {
        res.json({ state: true, msg: "Advertisment saved!" });
      }
    })
  
  })

});

router.post('/getadvetisments',token.verifytoken, (req, res) => {

  advertismentmodel.getadvetisments("dd", (err, advertisments) => {
    if (err) {
      res.json({ state: false, msg: "Server Error!!" });
    } else {
      res.json({ state: true, advertisments: advertisments });
    }
  });
});

router.post('/deletead',token.verifytoken, (req, res) => {
  //console.log(req.body.imageId)
  cloudinary.deleteimage(req.body.imageId,(callb)=>{
    advertismentmodel.deletead(req.body.adid, (err, resp) => {
      if (err) {
        res.json({ state: false, msg: "Server Error!!" });
      } else {
        res.json({ state: true, msg:"Advertiesment deleted!"  });
      }
    });
  })
  
});

router.post('/userprofile',token.verifytoken,(req,res)=>{
  //var userdata = req.user;
  //console.log(req.session);
  datamodelds.searchUser(req.body.username,(err,user)=>{
    if(err) {
      res.json({state:false,msg:"server error occured!!"});
    }else{
      res.json({state:true,userdata:user});
    }
  })
 // res.json(userdata);

});

router.post('/viewcomplain',token.verifytoken,(req,res)=>{
  jobmodel.viewcomplain(req.body.complainid,(err,complain)=>{
    if(err) {
      console.log(err)
      res.json({state:false,msg:"server error occured!!"});
    }else{
      
          res.json({state:true,complain:complain});
    }
  })
 // res.json(userdata);

});

router.post('/viewcomplainaction',token.verifytoken,(req,res)=>{
  jobmodel.viewcomplainaction(req.body.complainid,(err,action)=>{
    if(err) {
      console.log(err)
      res.json({state:false,msg:"server error occured!!"});
    }else{
      res.json({state:true,action:action});
    }
  })
 // res.json(userdata);

});

router.post('/viewsingleadvertiesment',token.verifytoken,(req,res)=>{
  advertismentmodel.viewsingleadvertiesment(req.body.advertiesmentid,(err,advertiesment)=>{
    if(err) {
      console.log(err)
      res.json({state:false,msg:"server error occured!!"});
    }else{
      res.json({state:true,advertiesment:advertiesment});
    }
  })
 // res.json(userdata);

});

router.post('/viewadmin',token.verifytoken,(req,res)=>{
  //console.log(req.body.advertiesmentid)
  advertismentmodel.viewadmin(req.body.advertiesmentid,(err,admin)=>{
    if(err) {
      console.log(err)
      res.json({state:false,msg:"server error occured!!"});
    }else{
      //console.log(admin)
      res.json({state:true,admin:admin});
    }
  })
 // res.json(userdata);

});

router.post('/viewadminbyid',token.verifytoken,(req,res)=>{
  //console.log(req.body.advertiesmentid)
  datamodelds.searchUserByadminId(req.body.adminid,(err,admin)=>{
    if(err) {
      console.log(err)
      res.json({state:false,msg:"server error occured!!"});
    }else{
      //console.log(admin)
      res.json({state:true,admin:admin});
    }
  })
 // res.json(userdata);

});

router.post('/promote',token.verifytoken, (req, res) => {
  var userdata = req.user;
  var data={
    postid:req.body.postid,
    rate:req.userdata.uid
  }
  //console.log(req.body.postid)
  jobmodel.promotejob(data,(err, abc) => {
    if (err) {
      //console.log(err);
      res.send({ state: false, msg: "Server error" });
    } else {
      res.send({ state: true, msg:"cleaner selected" });
    }
  })
});

