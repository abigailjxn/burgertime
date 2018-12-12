// exports.mySqlCred = {
//     user: process.env.ID,
//     password: process.env.PSWD
// };

let mySqlCred = {
    user: process.env.ID,
    password: process.env.PSWD
};

console.log(mySqlCred);
console.log(process.env.ID);
console.log(process.env.PSWD)

module.exports = mySqlCred;