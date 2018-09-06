const mysql = require('mysql');

module.exports.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'tidymaster'
  });


  /*host     : 'sql12.freemysqlhosting.net',
    user     : 'sql12255438',
    password : 'LIEY6al2fJ',
    database : 'sql12255438'*/