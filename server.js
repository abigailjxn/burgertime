const express = require("express");

const PORT = process.env.PORT || 8080;

let app = express();

let database = require("./config/connection");


app.listen(PORT, function (){
    console.log("Listening on at localhost:" + PORT);
})