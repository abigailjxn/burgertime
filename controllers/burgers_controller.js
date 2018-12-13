const express = require("express");
const router = express.Router();

const burgerModel = require("../models/burger");

router.get("/", function(req, res){
    burgerModel.selectAll(function(data){
        let burgerObj = {
            burgers: data
        };
        // res.json(burgerObj);
        res.render("index", burgerObj);
    })
});

router.post("/api/burgers", function(req, res){
    burgerModel.insertOne(req.body.burgerName, function(result){
        console.log("Burger Posted: " + result);
    })
    
});

router.put("api/burgers/:id", function(req, res){
    let condition = `id = ${req.params.id}`;
    burgerModel.updateOne(req.body.devoured, condition, function(result){
        if (result.changedRows === 0) {
            res.status(404).end();
        }
        res.status(200).end();
    })
})


module.exports = router;