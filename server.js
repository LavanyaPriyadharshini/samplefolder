
 //to check the output of these console, give the command as "node server(ur created file name)"

 console.log("hello world");

 //console.log(global)

 const os=require('os')

 console.log(os.type())
 console.log(os.version())
 console.log(os.homedir())

 console.log(__dirname) //shows the directory name
 
 console.log(__filename) //shows the filename currently used

 console.log("----");

 const path = require('path');
console.log(path.dirname(__filename));
 console.log(path.dirname(__filename));
 console.log(path.basename(__filename));
 console.log(path.extname(__filename));
 console.log(path.parse(__filename)); //gives a complete object



//from math.js
//the exported files from that will get imported here

const math=require('./math'); //here mention the filename exactly created
console.log(math.add(3,3)) //passign the values to the functio

//Destructing the functions
const {add,subtract,mul,div}=require('./math')

console.log(add(3,3)) //here after destructuring ,we need not call the math filename
console.log(subtract(3,3))
console.log(mul(3,3))
console.log(div(3,3))


//another way of importing
//import {add,subtract,mul,div} from './math'


