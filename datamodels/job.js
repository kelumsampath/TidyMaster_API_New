const dbconnection = require('./dbconnect');
const shortid = require('shortid');
var mydate = require('current-date');

module.exports.jobsave=function(job,callback){
    //console.log(job);
   // callback(null,true);
  if(dbconnection.connection){ 
      const postid = shortid.generate();
     dbconnection.connection.query('INSERT INTO jobrequestpost (postid,customerid,dateandtime,status) VALUES (?,?,?,?)', [postid,job.customerid,mydate('full', '-', ':'),job.status],function (err, rows, fields) {
         if (err){
             callback(err);
         }else{
            dbconnection.connection.query('INSERT INTO description (descriptionid,postid,title,employeegender,priceperhour,estimatedtime,joblocation,jobdate) VALUES (?,?,?,?,?,?,?,?)', [shortid.generate(),postid,job.title,job.gender,job.priceperhour,job.estimatedtime,job.joblocation,job.jobdate],function (err, rows, fields) {
                if (err){
                    callback(err);
                }else{
                    //dbconnection.connection.end();
                    //console.log(rows[0]);
                    callback(null,rows[0]);
                }
              })  
         }
       })  
    }else{
        callback(err);
    }
 }; 

 module.exports.getalljobs=function(callback){
    if(dbconnection.connection){ 
        dbconnection.connection.query('SELECT * FROM description d, jobrequestpost j WHERE d.postid=j.postid AND j.status=?', ["accepted"],function (err, rows, fields) {
            if (err){
                callback(err);
            }else{
                //dbconnection.connection.end();
               // console.log(rows);
                callback(null,rows);
            }
          
            
          })  
       }else{
           callback(err);
       }   
 }

 module.exports.viewjob=function(postid,callback){
    if(dbconnection.connection){ 
        dbconnection.connection.query('SELECT * FROM description d, jobrequestpost j WHERE d.postid=j.postid AND j.postid=?', [postid],function (err, rows, fields) {
            if (err){
                callback(err);
            }else{
                //dbconnection.connection.end();
               // console.log(rows);
                callback(null,rows[0]);
            }
          
            
          })  
       }else{
           callback(err);
       }   
 }

 module.exports.adminalljobs=function(callback){
    if(dbconnection.connection){ 
        dbconnection.connection.query('SELECT * FROM description d, jobrequestpost j WHERE d.postid=j.postid ',function (err, rows, fields) {
            if (err){
                callback(err);
            }else{
               // console.log(rows);
                callback(null,rows);
            }
          })  
       }else{
           callback(err);
       }   
 }

 module.exports.changepoststatus=function(postdata,callback){
    if(dbconnection.connection){ 
        dbconnection.connection.query('UPDATE jobrequestpost SET status=? WHERE postid=?', [postdata.status,postdata.postid],function (err, rows, fields) {
            if (err){
                callback(err);
            }else{
               // console.log(rows);
                callback(null,rows[0]);
            }      
          })  
       }else{
           callback(err);
       }   
 }