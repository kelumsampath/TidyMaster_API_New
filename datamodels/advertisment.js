const dbconnection = require('./dbconnect');
const shortid = require('shortid');
var mydate = require('current-date');

module.exports.postadd=function(detailsofadd,callback){
   
      if(dbconnection.connection){ 
      const adid = shortid.generate();
     // console.log(detailsofadd)
     dbconnection.connection.query('call postadvertisment(?,?,?,?,?,?,?,?)', [adid,detailsofadd.advertiser,detailsofadd.uid,detailsofadd.title,detailsofadd.venderurl,detailsofadd.imageid,detailsofadd.startdate,detailsofadd.enddate],function (err, rows, fields) {
         if (err){
             //console.log(err)
             callback(err);
         }else{
            callback(null,rows);           
         }
       })  
    }else{
        callback(err);
    }
 }; 