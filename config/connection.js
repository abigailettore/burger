require("dotenv").config()
//connecting to mysql database 
var mysql = require("mysql");

    var connection = mysql.createConnection(
        {
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.password,
        database: "burgers_db"
    });

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export the connection
module.exports = connection;