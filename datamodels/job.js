const dbconnection = require('./dbconnect');
const shortid = require('shortid');
var mydate = require('current-date');

module.exports.jobsave=function(job,callback){
    //console.log(job);
   // callback(null,true);
  if(dbconnection.connection){ 
      const postid = shortid.generate();
     dbconnection.connection.query('call saveAPost(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [postid,job.customerid,job.catid,mydate('full', '-', ':'),mydate('full', '-', ':'),job.status,shortid.generate(),job.title,job.levelofjob,job.gender,job.priceperhour,job.estimatedtime,job.numberofcleaners,job.joblocation,job.jobdate,job.timeforstartjob,job.paymentstatus],function (err, rows, fields) {
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
        dbconnection.connection.query('CALL getAdminAcceptance(?,?,?,?,?,?)', [shortid.generate(),postdata.adminid,postdata.postid,postdata.reason,mydate('full', '-', ':'),postdata.status],function (err, rows, fields) {
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

 module.exports.findcustomeralljobs=function(user,callback){
    if(dbconnection.connection){ 
        dbconnection.connection.query('CALL getcustomerjobs(?)', [user.uid],function (err, rows, fields) {
            if (err){
                callback(err);
            }else{
               // console.log(rows);
                callback(null,fields);
            }      
          })  
       }else{
           callback(err);
       }  
 }