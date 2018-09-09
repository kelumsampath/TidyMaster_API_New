const dbconnection = require('./dbconnect');
const shortid = require('shortid');
var mydate = require('current-date');

module.exports.jobsave=function(job,callback){
    console.log(job);
   // callback(null,true);
  if(dbconnection.connection){ 
     dbconnection.connection.query('INSERT INTO jobrequestpost (postid,customerid,dateandtime,status) VALUES (?,?,?,?)', [shortid.generate(),job.customerid,mydate('full', '-', ':'),job.status],function (err, rows, fields) {
         if (err){
             callback(err);
         }else{
             //dbconnection.connection.end();
             //console.log(rows[0]);
             callback(null,rows[0]);
         }
       
         
       })  
    }else{
        callback(err);
    }
 }; 