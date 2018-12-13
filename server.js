const express = require("express");

const PORT = process.env.PORT || 8080;

let app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

let connection = require("./config/connection");


// let orm = require("./config/orm");
// orm.selectAll("burgers", function(){console.log(results)
// });

let routes = require("./controllers/burgers_controller");

app.use(routes);


app.listen(PORT, function (){
    console.log("Listening on at localhost:" + PORT);
})