const express = require("express");

const PORT = process.env.PORT || 8080;

let app = express();

// let database = require("./config/connection");
// let orm = require("./config/orm");
// orm.selectAll("burgers", function(){console.log(results)
// });

let routes = require("./controllers/burgers_controller");

app.use(routes);


app.listen(PORT, function (){
    console.log("Listening on at localhost:" + PORT);
})