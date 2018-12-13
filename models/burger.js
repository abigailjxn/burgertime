let orm = require("../config/orm");

let burger = {
  selectAll: function(controllerCb) {
    orm.selectAll("burgers", function(res) {
      controllerCb(res);
    });
  },
  insertOne: function(values, controllerCb) {
    orm.insertOne("burgers", values, function(res) {
      controllerCb(res);
    });
  },
  updateOne: function(values, condition, controllerCb) {
    orm.updateOne("burgers", values, condition, function(res) {
      controllerCb(res);
    });
  }
};

// console.log(burger.selectAll);

module.exports = burger;
