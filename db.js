var mysql = require('mysql');

var db = module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pos'
});

db.connect(function(err) {
    if (err){
        console.log("database connection error ***** "+err);
    }
    else
        console.log('You are now connected...');
});

