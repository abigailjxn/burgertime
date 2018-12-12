let connection = require("./connection");

let orm = {
    selectAll: function(table, modelCb) {
        let queryString = "SELECT * FROM " + table + " ;";
        connection.query(queryString, function (err, results){
            if (err) {
                throw err;
            }
            modelCb(results);
            console.log(results);
        });
       
    },

    // insertOne: function () {

    // },

    // updateOne: function () {

    // }
};

console.log(orm.selectAll);

module.exports = orm;