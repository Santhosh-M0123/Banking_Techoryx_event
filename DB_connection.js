var mysql = require("mysql");

let con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : "bank_server"
});


module.exports = con