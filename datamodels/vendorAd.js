const bcrypt = require('bcryptjs');
const dbconnection = require('./dbconnect');
const shortid = require('shortid');
var mydate = require('current-date');


module.exports.getAllAds=function(username,callback){
    if(dbconnection.connection){ 
        dbconnection.connection.query('SELECT adId, adTitle, noOFViews,createdDateAndTime,expiredDateAndTime, vendorURL FROM verndoradvertiestment WHERE adproviderid IN (SELECT adproviderid FROM advertiestmentprovider WHERE uid IN (SELECT uid FROM user WHERE username = ?))', [username],function (err, rows, fields) {
            if (err){
                callback(err);
            }else{
               // console.log(JSON.parse(JSON.stringify(rows)));
                callback(null,JSON.parse(JSON.stringify(rows)));
            }                  
          })  
       }else{
           callback(err);
       }   
 }

 module.exports.getDailyViews=function(adId,callback){
    
    if(dbconnection.connection){ 
        dbconnection.connection.query('SELECT noOfApears,date FROM dailyappears WHERE adId=?', [adId],function (err, rows, fields) {
            if (err){
                callback(err);
            }else{
               
                callback(null,JSON.parse(JSON.stringify(rows)));
            }                  
          })  
       }else{
           callback(err);
       }   
 }

 module.exports.getAllAdsByMonth = function(username,callback){
    
    if(dbconnection.connection){ 
       

        dbconnection.connection.query('SELECT MONTHNAME(createdDateAndTime) AS month , COUNT(adId) AS count FROM verndoradvertiestment WHERE adproviderid IN (SELECT adproviderid FROM advertiestmentprovider WHERE uid IN (SELECT uid FROM user WHERE username = ? ) ) AND YEAR(createdDateAndTime) = YEAR(CURDATE()) GROUP BY month', [username],function (err, rows, fields) {

            if (err){
               
                callback(err);
            }else{
             
                callback(null,JSON.parse(JSON.stringify(rows)));
            }                  
          })  
       }else{
           callback(err);
       }   
 }


 module.exports.countViews = function(adId,callback){
    
    if(dbconnection.connection){ 
       
        dbconnection.connection.query('CALL countviews(?)', [adId],function (err, rows, fields) {
            if (err){
               
                callback(err);
            }else{
             
                callback(null,rows);
            }                  
          })  
       }else{
           callback(err);
       }   
 }

