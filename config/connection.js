// require("dotenv").config();

// const keys = require("./keys");
// const userKey = keys.mySqlCred.user;
// const passwordKey = keys.mySqlCred.password;

const mysql = require("mysql");
// console.log(keys);

let connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT,
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
});

// connection.query("SELECT * FROM burgers", function(err, result){
//     if (err) {
//         throw err;
//     }
//     console.log("The results are: " + result);
// })

module.exports = connection;