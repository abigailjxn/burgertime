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
})


module.exports = router;