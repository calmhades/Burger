var mysql = require('mysql');

// var JAWSDB_URL = "mysql://uruxw3372uqmwxy5:irt7kvdr057i47z7@tj5iv8piornf713y.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/zohmdq37cdrsai5r"

if (process.env.mysql.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
});
};

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;