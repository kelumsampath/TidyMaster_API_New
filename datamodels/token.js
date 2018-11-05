const bcrypt = require('bcryptjs');
const dbconnection = require('./dbconnect');

module.exports.tokenSave = function(newtoken2,callback){   
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("dcdc", salt, function(err, hash) {
            if(err){
                throw err;
            }else{               
               if(dbconnection.connection){ 
                dbconnection.connection.query('INSERT INTO token (token,uid) VALUES (?,?)', [newtoken2.token,newtoken2.uid],function (err, rows, fields) {
                    if (err){
                        callback(err);
                    }else{                      
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
   if(dbconnection.connection){ 
    dbconnection.connection.query('SELECT * FROM token WHERE token=?', [token],function (err, rows, fields) {
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


module.exports.revokeToken = function(token,callback){ 
    if(dbconnection.connection){ 
        dbconnection.connection.query('DELETE FROM token WHERE token=?', [token],function (err, rows, fields) {
            if (err){               
                callback(err);
            }else{              
                callback(null,true);
            }              
          })  
        }else{       
            callback(err);
        }
}; 