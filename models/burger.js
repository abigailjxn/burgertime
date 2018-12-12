let orm = require("../config/orm");

let burger = {
    selectAll: function(controllerCb) {
        orm.selectAll("burgers", function(res){
            controllerCb(res);
        })
    },
    insertOne: function (controllerCb) {
        orm.insertOne("burgers", values, function(res){
            controllerCb(res);
        });
    },
    // updateOne: function () {
    //     orm.updateOne();
    // }
};

// console.log(burger.selectAll);

module.exports = burger;
