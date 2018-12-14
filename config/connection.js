require("dotenv").config();

const keys = require("./keys");
const userKey = keys.user;
const passwordKey = keys.password;

const mysql = require("mysql");
console.log(keys);

let connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT,
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
