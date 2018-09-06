const mysql = require('mysql');
const cofigdata = require('./../config/database').dbconfigdata;

module.exports.connection = mysql.createConnection({
    host     : cofigdata.host,
    user     : cofigdata.user,
    password : cofigdata.password,
    database : cofigdata.database
  });


  /*host     : 'sql12.freemysqlhosting.net',
    user     : 'sql12255438',
    password : 'LIEY6al2fJ',
    database : 'sql12255438'*/