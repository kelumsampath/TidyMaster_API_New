const dbconnection = require('./dbconnect');
const shortid = require('shortid');
var mydate = require('current-date');

module.exports.jobsave=function(job,callback){
    //console.log(job)
      if(dbconnection.connection){ 
      const postid = shortid.generate();
     dbconnection.connection.query('call savejobpost(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [postid,job.uid,job.catogaryname,mydate('full', '-', ':'),mydate('full', '-', ':'),job.status,shortid.generate(),job.title,job.levelofjob,job.gender,job.priceperhour,job.estimatedtime,job.numberofcleaners,job.joblocation,job.jobdate,job.timeforstartjob,job.paymentstatus],function (err, rows, fields) {
         if (err){
             callback(err);
         }else{
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

 module.exports.adminjobsbystatus=function(status,callback){
    if(dbconnection.connection){ 
        dbconnection.connection.query('SELECT * FROM description d, jobrequestpost j,category c WHERE d.postid=j.postid AND j.categoryid=c.categoryid AND j.status=?', [status],function (err, rows, fields) {
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
        dbconnection.connection.query('CALL getAdminAcceptance(?,?,?,?,?,?)', [shortid.generate(),postdata.uid,postdata.postid,postdata.reason,mydate('full', '-', ':'),postdata.status],function (err, rows, fields) {
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

 // All job view for given customer

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

 // Apply for job 

 module.exports.applyforjob=function(user,callback){
    if(dbconnection.connection){ 
        dbconnection.connection.query('call applyjob(?,?,?,?)',[shortid.generate(),user.jobid,user.uid,mydate('date')],function(err, rows, fields) {
            if (err){
                console.log(err)
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


 // Customer's active job 

 module.exports.findcustomeractivejobs=function(user,callback){
    if(dbconnection.connection){
        dbconnection.connection.query('SELECT * FROM jobrequestpost jr,description d,job j,customer cu WHERE jr.postid=d.postid AND jr.postid!=j.postid AND jr.customerid=cu.customerid AND cu.uid=?',[user.uid],function(err,rows,fields){
            if(err){
                callback(err);
            }else{
                callback(null,rows);
            }
        })
    }else{
        callback(err);
    }
 }

 // Customer's completed jobs 

 module.exports.findcustomercompletedjobs=function(user,callback){
    if(dbconnection.connection){
        dbconnection.connection.query('SELECT * FROM jobrequestpost jr,description d,job j,customer cu WHERE jr.postid=d.postid AND jr.postid=j.postid AND jr.customerid=cu.customerid AND cu.uid=?',[user.uid],function(err,rows,fields){
            if(err){
                callback(err);
            }else{
                callback(null,rows);
            }
        })
    }else{
        callback(err);
    }
 }

 // get details of singhe job ( need help for query )


 module.exports.singlejob=function(jobid,callback){
    if(dbconnection.connection){
        dbconnection.connection.query('SELECT * FROM jobrequestpost j, description d, category c WHERE d.postid = j.postid AND j.categoryid=c.categoryid AND j.postid=?',[jobid],function(err,rows,fields){
            if(err){
                callback(err);
            }else{
                callback(null,rows);
            }
        })
    }else{
        callback(err);
    }
 }

 // view all unchecked complains

 module.exports.viewcomplains=function(complain,callback){
    if(dbconnection.connection){
        dbconnection.connection.query('SELECT * FROM complain WHERE status="pending"',[],function(err,rows,fields){
            if(err){
                callback(err);
            }else{
                callback(null,rows);
            }
        })
    }else{
        callback(err);
    }
 }

 // view all checked complains
 module.exports.viewcheckedcomplains=function(complain,callback){
    if(dbconnection.connection){
        dbconnection.connection.query('SELECT * FROM complain c,action a WHERE a.complainid=c.complainid AND status="reviewed"',[],function(err,rows,fields){
            if(err){
                callback(err);
            }else{
                callback(null,rows);
            }
        })
    }else{
        callback(err);
    }
 }

 //complain action save
 module.exports.complaineduseraction=function(complaindata,callback){
     //console.log(complaindata.uid)
    if(dbconnection.connection){
        dbconnection.connection.query('CALL reviewcomplain(?,?,?,?,?)',[shortid.generate(),complaindata.uid,complaindata.complainid,complaindata.action,mydate('full', '-', ':')],function(err,rows,fields){
            if(err){
                callback(err);
            }else{
                callback(null,rows);
            }
        })
    }else{
        callback(err);
    }
 }

