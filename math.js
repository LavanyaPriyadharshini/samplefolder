
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const mul = (a,b) => a*b;
const div = (a,b) => a/b;

//destructuring the above functions
//we have tyo export the files from the above functions
//now after exporting , you have to go to the server.js and import the files

//module.exports={add,subtract,mul,div} --- 1st way of destructuring

//another way of destructuring- comment the above line and check this
exports.add = (a,b) => a+b;
exports.subtract = (a,b) => a-b;
exports.mul = (a,b) => a*b;
exports.div = (a,b) => a/b;
