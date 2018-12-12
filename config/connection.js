require("dotenv").config();

const keys = require("./keys");
const userKey = keys.mySqlCred.user;
const passwordKey = keys.mySqlCred.password;

const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT || 8080,
    user: userKey,
    password: passwordKey,
    database: "burgers_db"
});

connection.connect(function(error){
    if (error){
        console.error("error connecting: " + error.stack);
    return
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;