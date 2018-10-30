var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "tj5iv8piornf713y.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "uruxw3372uqmwxy5",
    password: "irt7kvdr057i47z7",
    database: "zohmdq37cdrsai5r"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;