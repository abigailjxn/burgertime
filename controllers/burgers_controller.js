const express = require("express");
const router = express.Router();

const burgerModel = require("../models/burger");

router.get("/", function(req, res){
    burgerModel.selectAll(function(data){
        let burgerObj = {
            burgers: data
        };
        res.json(burgerObj);
    })
});

router.post("/api/burgers", function(req, res){
    burgerModel.insertOne(req.body.burgerName, function(result){
        console.log("Burger Posted: " + result);
    })
    
})


module.exports = router;