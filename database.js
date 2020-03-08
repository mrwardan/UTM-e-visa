const mysql = require('mysql');

module.exports = function (sql ,params, queryCallback){
    
    const db = mysql.createConnection({
        // connectionLimit:50,
        host: 'localhost',      
        user: 'root',
        password: '',
        database: 'emad2'
    });

    db.connect(function(err){
        if (err) throw err;
        db.query(sql ,params, queryCallback);
        db.end();
    });
}