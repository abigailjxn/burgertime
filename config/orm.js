let connection = require("./connection");

let orm = {
    selectAll: function(table, modelCb) {
        let queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function (err, results){
            if (err) {
                throw err;
            }
            modelCb(results);
            console.log(results);
        });
       
    },

    insertOne: function (table, values, modelCb) {
        let valString = `"${values}"`;
        let queryString = `INSERT INTO ${table} (burger_name)
        VALUES (${valString});`;
        connection.query(queryString, function(err, results){
            if (err) {
                throw err
            };
            modelCb(results);
        })
    },

    updateOne: function () {

    }
};

console.log(orm.selectAll);

module.exports = orm;