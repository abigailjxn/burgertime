require("dotenv").config();

const keys = require("./keys");
console.log(keys);
const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT || 8080,
    user: "bootcamp_hw",
    password: "bopbop",
    database: "burgers_db"
});

connection.connect(function(error){
    if (error){
        console.error("error connecting: " + error.stack);
    return
    }
    console.log("connected as id " + connection.threadId);
})