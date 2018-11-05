const bcrypt = require('bcryptjs');
const dbconnection = require('./dbconnect');
const shortid = require('shortid');
var mydate = require('current-date');

module.exports.saveadvertiser = function(advertiser,callback){
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(advertiser.password, salt, function (err, hash) {
            advertiser.password = hash;
            if (err) {
                throw err;
            } else {
                if (dbconnection.connection) {
                    dbconnection.connection.query('call addAdProvider(?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [shortid.generate(), advertiser.roleid, advertiser.username, advertiser.password, advertiser.email, advertiser.nic, advertiser.photoId, advertiser.telephone, advertiser.firstname, advertiser.lastname, advertiser.gender, advertiser.address, shortid.generate(), advertiser.company], function (err, rows, fields) {
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