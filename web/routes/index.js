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



















 


module.exports = router;