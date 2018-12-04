
const bcrypt = require('bcryptjs');
const dbconnection = require('./dbconnect');
const shortid = require('shortid');
var mydate = require('current-date');





module.exports.dbSave = function (regUser, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(regUser.password, salt, function (err, hash) {
            regUser.password = hash;
            if (err) {
                throw err;
            } else {
                if (dbconnection.connection) {
                    dbconnection.connection.query('call addCustomerOrCleaner(?,?,?,?,?,?,?,?,?,?,?,?,?)', [shortid.generate(), regUser.role, regUser.username, regUser.password, regUser.email, regUser.nic, regUser.photoId, regUser.telephone, regUser.firstname, regUser.lastname, regUser.gender, regUser.address, shortid.generate()], function (err, rows, fields) {
                        if (err) {
                            callback(err);
                        } else {
                            callback(null, true);
                        }
                    })
                } else {
                    callback(err);
                }
            }
        });
    });
};


module.exports.searchUser = function(username,callback){
   // const query = {username:username};
   // datamodels.findOne(query,callback);
   if(dbconnection.connection){ 
    dbconnection.connection.query('SELECT * FROM user u, role r WHERE u.roleid=r.roleid AND username=?', [username],function (err, rows, fields) {
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


module.exports.searchwebusers = function(username,callback){
    // const query = {username:username};
    // datamodels.findOne(query,callback);
    if(dbconnection.connection){ 
     dbconnection.connection.query('SELECT * FROM user u, role r WHERE u.roleid=r.roleid AND username LIKE "'+username+'%"', [username],function (err, rows, fields) {
         if (err){
             callback(err);
         }else{
             //dbconnection.connection.end();
             //console.log(rows);
             callback(null,rows);
         }
       
         
       })  
    }else{
        callback(err);
    }
 }; 

 module.exports.searchwebusersall = function(username,callback){
    // const query = {username:username};
    // datamodels.findOne(query,callback);
    if(dbconnection.connection){ 
     dbconnection.connection.query('SELECT * FROM user u, role r WHERE u.roleid=r.roleid',[],function (err, rows, fields) {
         if (err){
             callback(err);
         }else{
             //dbconnection.connection.end();
             //console.log(rows);
             callback(null,rows);
         }
       
         
       })  
    }else{
        callback(err);
    }
 }; 
 


module.exports.matchpassword = function (password, hash, callback) {
    bcrypt.compare(password, hash, function (err, res) {
        if (err) throw err;
        if (res) {
            callback(null, res);
        } else {
            callback(null, res);
        }
    });
}

module.exports.dbSavespecialuser = function (regUser, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(regUser.password, salt, function (err, hash) {
            regUser.password = hash;
            if (err) {
                throw err;
            } else {
                if (dbconnection.connection) {
                    dbconnection.connection.query('call regspecialuser(?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [shortid.generate(), regUser.role, regUser.username, regUser.password, regUser.email, regUser.nic, regUser.photoId, regUser.telephone, regUser.firstname, regUser.lastname, regUser.gender, regUser.address, shortid.generate(),regUser.company], function (err, rows, fields) {
                        if (err) {
                            callback(err);
                        } else {
                            callback(null, true);
                        }
                    })
                } else {
                    callback(err);
                }
            }
        });
    });
};

module.exports.removeuser = function(uid,callback){
    // const query = {username:username};
    // datamodels.findOne(query,callback);
    if(dbconnection.connection){ 
     dbconnection.connection.query('DELETE FROM user WHERE uid=?', [uid],function (err, rows, fields) {
         if (err){
             callback(err);
         }else{
             //dbconnection.connection.end();
             console.log(rows);
             callback(null,rows);
         }
       
         
       })  
    }else{
        callback(err);
    }
 }; 

module.exports.searchUser;