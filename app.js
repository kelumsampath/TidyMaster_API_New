const express = require('express');
const http = require('http');
const path = require('path');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
var blacklist = require('express-jwt-blacklist');
const cors = require('cors');
const mysql = require('mysql')

const app = express();
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<h1>Hello World</h1>');
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});

const index = require('./web/routes');
const user = require('./web/routes/user');
const admin = require('./web/routes/admin');
const customer = require('./web/routes/customer');
const cleaner = require('./web/routes/cleaner');
const addprovider = require('./web/routes/addprovider');
const specialuser = require('./web/routes/specialuser');
const config = require('./config/database');
const database=require('./datamodels/dbconnect');
http.createServer(app).listen(port,(err)=>{
  if (err) {
    console.error(err);
  } else {
    console.log("App listen to port:"+port);
  }
});

app.use(cors());
/*
const connectDB = mongoose.connect(config.database,(err)=>{
if(err){
  console.log("Warning! Database not connected");
}else{
  console.log("Database connected"); 
}
});*/

app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
app.get('/',(req,res)=>{
  res.send("Hello App!");
});*/

app.use('/',index);
app.use('/user',user);
app.use('/customer',customer);
app.use('/cleaner',cleaner);
app.use('/admin',admin);
app.use('/addprovider',addprovider);
app.use('/specialuser',specialuser);

app.use(passport.initialize());
app.use(passport.session());



/*if(database.connection){
  console.log("connected");
}else{
  console.log("not connected");
}
*/
