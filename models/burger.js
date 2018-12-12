let orm = require("../config/orm");

let burger = {
    selectAll: function(controllerCb) {
        orm.selectAll("burgers", function(res){
            controllerCb(res);
        })
    }
    // insertOne: function () {
    //     orm.insertOne();
    // },
    // updateOne: function () {
    //     orm.updateOne();
    // }
};

// console.log(burger.selectAll);

module.exports = burger;
