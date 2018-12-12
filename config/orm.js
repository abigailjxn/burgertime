let connection = require("./connection");

const orm = {
    selectAll: function(table, modelCb) {
        let queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function (err, results){
            if (err) throw error;
            modelCb(results);
            console.log(results);
        });
       
    },

    // insertOne: function () {

    // },

    // updateOne: function () {

    // }
};

module.exports = orm;