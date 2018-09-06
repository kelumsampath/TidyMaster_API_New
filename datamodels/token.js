//const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dbconnection = require('./dbconnect');
//const schema = mongoose.Schema;

/*const tokenSchema = new schema({
    token:{type:String,required:true},
});

const tokenmodels = module.exports = mongoose.model("tokenmodels",tokenSchema);
*/
module.exports.tokenSave = function(newtoken2,callback){
    //console.log(newtoken2);
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("dcdc", salt, function(err, hash) {
            if(err){
                throw err;
            }else{
               // newtoken2.save(err, callback);
               if(dbconnection.connection){ 
                dbconnection.connection.query('INSERT INTO token (token,uid) VALUES (?,?)', [newtoken2.token,newtoken2.uid],function (err, rows, fields) {
                    if (err){
                        callback(err);
                    }else{
                       // dbconnection.connection.end();
                        //console.log('The solution is: ');
                        callback(null,true);
                    }
                  
                    
                  })  
               }else{
                   callback(err);
               }
                
            }
        });
    });

};

module.exports.matchtoken = function(token,callback){
    //const query = {token:token};
   // tokenmodels.findOne(query,callback);
   //console.log(token)
   if(dbconnection.connection){ 
    dbconnection.connection.query('SELECT * FROM token WHERE token=?', [token],function (err, rows, fields) {
        if (err){
            callback(err);
        }else{
            //dbconnection.connection.end();
           // console.log(rows[0]);
            callback(null,rows[0]);
        }
           
      })  
    }else{
        callback(err);
    }
}; 


module.exports.revokeToken = function(token,callback){
    //const query = {token:token};
    //tokenmodels.remove(query,callback);
    //console.log(token)
    if(dbconnection.connection){ 
        dbconnection.connection.query('DELETE FROM token WHERE token=?', [token],function (err, rows, fields) {
            if (err){
                //console.log(err);
                callback(err);
            }else{
                //dbconnection.connection.end();
                console.log("ddddd");
                callback(null,true);
            }
               
          })  
        }else{
            console.log("ss");
            callback(err);
        }
}; 