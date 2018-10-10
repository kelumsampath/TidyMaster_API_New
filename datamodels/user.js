//const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dbconnection = require('./dbconnect');
const shortid = require('shortid');
//const schema = mongoose.Schema;


/*const userSchema = new schema({
    fullname:{type:String,required:true},
    username:{type:String,required:true, unique:true},
    email:{type:String,required:true},
    phoneno:{type:Number,required:true},
    password:{type:String,required:true}

});

const datamodels = module.exports = mongoose.model("datamodels",userSchema);
*/
module.exports.dbSave = function(regUser,callback){

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(regUser.password, salt, function(err, hash) {
                //console.log(hash);
                regUser.password = hash;
                if(err){
                    throw err;
                }else{
                   // regUser.save(err, callback);
                   if(dbconnection.connection){ 
                    dbconnection.connection.query('INSERT INTO user ( uid,username, password, email, telephone,firstName) VALUES (?,?,?,?,?,?)', [shortid.generate(),regUser.username, regUser.password, regUser.email, regUser.phoneno , regUser.fullname],function (err, rows, fields) {
                        if (err){
                            callback(err);
                        }else{
                            //dbconnection.connection.end();
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


module.exports.searchUser = function(username,callback){
   // const query = {username:username};
   // datamodels.findOne(query,callback);
   if(dbconnection.connection){ 
    dbconnection.connection.query('SELECT * FROM user WHERE username=?', [username],function (err, rows, fields) {
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



module.exports.matchpassword = function(password,hash,callback){
    //console.log(password+" "+hash);
    bcrypt.compare(password, hash, function(err, res) {
        if(err) throw  err;
        if (res){
            callback(null,res);
        } else{
            callback(null,res);
        }
       // console.log(res);
    });
}



module.exports.searchUser;