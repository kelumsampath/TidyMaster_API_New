const bcrypt = require('bcryptjs');
const dbconnection = require('./dbconnect');
const shortid = require('shortid');
var mydate = require('current-date');


module.exports.getAllAds=function(callback){
    if(dbconnection.connection){ 
        dbconnection.connection.query('SELECT adId, ,adTitle, noOFViews,createdDateAndTime, expiredDateAndTime, vendorURL FROM verndoradvertiestment WHERE adproviderid==?', [adproviderid],function (err, rows, fields) {
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

 module.exports.getDailyViews=function(callback){
    if(dbconnection.connection){ 
        dbconnection.connection.query('SELECT noOfApears,date FROM dailyappears WHERE adId=?', [adId],function (err, rows, fields) {
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