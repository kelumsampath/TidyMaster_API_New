const dbconnection = require('./dbconnect');
const shortid = require('shortid');
var mydate = require('current-date');

module.exports.postadd=function(detailsofadd,callback){
   
      if(dbconnection.connection){ 
      const adid = shortid.generate();
     //console.log(adid)
     dbconnection.connection.query('call postadvertisment(?,?,?,?,?,?,?,?)', [adid,detailsofadd.advertiser,detailsofadd.uid,detailsofadd.title,detailsofadd.venderurl,detailsofadd.imageid,detailsofadd.startdate,detailsofadd.enddate],function (err, rows, fields) {
         if (err){
           // console.log(err)
             callback(err);
         }else{
           // console.log(rows)
            callback(null,rows);           
         }
       })  
    }else{
        callback(err);
    }
 }; 

 module.exports.getadvetisments=function(dd,callback){
   
    if(dbconnection.connection){ 
   dbconnection.connection.query('SELECT * FROM verndoradvertiestment v,advertiestmentprovider ad WHERE v.adproviderid=ad.adproviderid', [],function (err, rows, fields) {
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

module.exports.deletead=function(adid,callback){
   
    if(dbconnection.connection){ 
   dbconnection.connection.query('DELETE FROM verndoradvertiestment WHERE adid=?', [adid],function (err, rows, fields) {
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

module.exports.viewsingleadvertiesment=function(advertiesmentid,callback){
    if(dbconnection.connection){ 
        dbconnection.connection.query('SELECT * FROM verndoradvertiestment v,advertiestmentprovider ad,user u WHERE v.adproviderid=ad.adproviderid AND ad.uid=u.uid AND v.adId=?', [advertiesmentid],function (err, rows, fields) {
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

 module.exports.viewadmin=function(advertiesmentid,callback){
    if(dbconnection.connection){ 
        dbconnection.connection.query('SELECT * FROM verndoradvertiestment v,admin ad,user u WHERE v.adminId=ad.adminId AND ad.uid=u.uid AND v.adId=?', [advertiesmentid],function (err, rows, fields) {
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