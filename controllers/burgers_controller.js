const express = require("express");
const burgerModel = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res){
    burgerModel.selectAll(function(data){
        let burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.json(burgerObj);
    })
})


module.exports = router;