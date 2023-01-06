const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'final_test',
    charset: 'utf8_unicode_ci'
});

module.exports = conn;