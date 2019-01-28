
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
                   
                    dbconnection.connection.query('call addCustomerOrCleaner(?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [shortid.generate(), regUser.role, regUser.username, regUser.password, regUser.email, regUser.nic, regUser.photoId, regUser.photourl, regUser.telephone, regUser.firstname, regUser.lastname, regUser.gender, regUser.address, shortid.generate()], function (err, rows, fields) {
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
 
module.exports.searchUser;

module.exports.searchUserById = function(uid,callback){
    // const query = {username:username};
    // datamodels.findOne(query,callback);
    if(dbconnection.connection){ 
     dbconnection.connection.query('SELECT * FROM user u, role r WHERE u.roleid=r.roleid AND uid=?', [uid],function (err, rows, fields) {
         if (err){
             callback(err);
         }else{
             //dbconnection.connection.end();
             //console.log(rows[0]);
             var res=JSON.parse(JSON.stringify(rows[0]))
             callback(null,res);
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
                    dbconnection.connection.query('call regspecialuser(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [shortid.generate(), regUser.role, regUser.username, regUser.password, regUser.email, regUser.nic, regUser.photoId,regUser.url , regUser.telephone, regUser.firstname, regUser.lastname, regUser.gender, regUser.address, shortid.generate(),regUser.company], function (err, rows, fields) {
                        if (err) {
                            console.log(err)
                            callback(err);
                        } else {
                            console.log(rows)
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


 module.exports.editprofile = function(userdata,callback){
   
    if(dbconnection.connection){ 
     dbconnection.connection.query('UPDATE user SET firstname=? , lastname=?, username=?, email=?, nic=?, gender=?, telephone=?, address=? WHERE uid=?', [userdata.firstname,userdata.lastname,userdata.username,userdata.email,userdata.nic,userdata.gender,userdata.telephone,userdata.address,userdata.uid],function (err, rows, fields) {
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

 module.exports.editpassword = function(userpass,callback){
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(userpass.newpassword, salt, function (err, hash) {
            var pass= hash;
            if (err) {
                throw err;
            } else {
                if (dbconnection.connection) {
                    dbconnection.connection.query('UPDATE user SET password=? WHERE uid=?', [pass,userpass.uid], function (err, rows, fields) {
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

 
 module.exports.getalladproviders = function(nodata,callback){
    
    if(dbconnection.connection){ 
     dbconnection.connection.query('SELECT username FROM user u, advertiestmentprovider a WHERE u.uid=a.uid',[],function (err, rows, fields) {
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
 }; 

 module.exports.profpicupdate = function(updatedata,callback){
    if(dbconnection.connection){ 
     dbconnection.connection.query('UPDATE user SET photoId=? , photourl=? WHERE uid=?', [updatedata.pic_id,updatedata.pic_url,updatedata.uid],function (err, rows, fields) {
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

 module.exports.searchUserbycustomerId = function(cusid,callback){
    
    if(dbconnection.connection){ 
     dbconnection.connection.query('SELECT * FROM user u, role r,customer c WHERE u.roleid=r.roleid AND u.uid=c.uid AND c.customerid=?', [cusid],function (err, rows, fields) {
         if (err){
             callback(err);
         }else{
             //dbconnection.connection.end();
             //console.log(rows[0]);
             var res=JSON.parse(JSON.stringify(rows[0]))
             callback(null,res);
         }
       
         
       })  
    }else{
        callback(err);
    }
 }; 

 module.exports.searchUserByadminId = function(adminid,callback){
    // const query = {username:username};
    // datamodels.findOne(query,callback);
    if(dbconnection.connection){ 
     dbconnection.connection.query('SELECT * FROM user u, role r,admin ad WHERE u.roleid=r.roleid AND u.uid=ad.uid AND ad.adminid=?', [adminid],function (err, rows, fields) {
         if (err){
             callback(err);
         }else{
             //dbconnection.connection.end();
             //console.log(rows[0]);
             var res=JSON.parse(JSON.stringify(rows[0]))
             callback(null,res);
         }
       
         
       })  
    }else{
        callback(err);
    }
 }; 

 module.exports.customerprofile=function(customerid,callback){
    // const query = {username:username};
    // datamodels.findOne(query,callback);
    if(dbconnection.connection){ 
     dbconnection.connection.query('SELECT * FROM user u, role r,customer c WHERE u.roleid=r.roleid AND u.uid=c.uid AND c.customerid=?', [customerid],function (err, rows, fields) {
         if (err){
             callback(err);
         }else{
             //dbconnection.connection.end();
             //console.log(rows[0]);
             var res=JSON.parse(JSON.stringify(rows[0]))
             callback(null,res);
         }
       
         
       })  
    }else{
        callback(err);
    }
 }; 