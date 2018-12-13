// exports.mySqlCred = {
//     user: process.env.ID,
//     password: process.env.PSWD
// };

let mySqlCred = {
    user: process.env.ID,
    password: process.env.PSWD
};

console.log(mySqlCred);


module.exports = mySqlCred;