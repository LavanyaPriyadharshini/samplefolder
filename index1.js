
//this is the installation of npm for only this file exclusively

//by executing "npm init" we create a package.json file

// 1. npm init
// 2 .it asks series of values ,give accordingly

// 3. after choosing yes, it shows the package.json files

// 4. give command "npm i date-fns" ----- node modules and package-lock json will get installed

// IMPORTANT ------- GITIGNORE

//if we dont want to copy some of the files to git or ignore certain files to git, we use the concept of "gitignore"
//so if you want to ignore nodemodules folder to be copied to the git, you create a file "gitignore"
//inside gitignore, specify the files you want to ignore , for eg if you dont want to show "math.js" or "nodemodules" in the git repo you add these inside the gitignore file

//------ copying the code form git
//---use npm install to install asll the dependencies inside the package.json for the git copied code


//----------- TO INSTALL DEVELOPMENT DEPENDENCY -----------

// give command --- "npm i nodemon -D" --- it creates dev dependencies

//in package.json, you will have the "devdependiencies" getting created ------ so there you have to make certain changes

//  "start": "node index.js"----change this line from server to index
// "dev":"nodemon index" ---- add this line
//run with command ----- "npm run dev"

// the above code runs only when the npm is installed specifically to a file and not globally

console.log("hello")



//-------------------- date function of npm package 

const {format}=require('date-fns')

console.log(format(new Date(),'ddMMyyyy\tHH:mm:ss'));

//nodemon exectues continuosly , or else you can give npm start

//output
// C:\Users\lavanyap\Desktop\Node js\samplefolder>npm run dev

// > samplefolder@1.0.0 dev
// > nodemon index1        

// [nodemon] 3.1.9
// [nodemon] to restart at any time, enter `rs`  
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node index1.js`
// hello
// 19032025        12:12:11
// [nodemon] clean exit - waiting for changes before restart


// ------- PACKAGE --- "npm i uuid"

//see the package.json, in production dependencies ,the uuid package gets added


// production denpendencies
// "dependencies": {
//     "date-fns": "^4.1.0",
//     "uuid": "^11.1.0"
//   },

// if we want to update the package with any new version you can give specifically as  "npm i uuid@8.3.1"

//to uninstall the package ,you can give "npm rm nodemon -D" --- remove the package from dev dependency, in package.json you have to manually clear the script "dev"


// ---------UUID PACKAGE ----------- universally unique id

//const {format}= require('date-fns')

const {v4:uuid} = require('uuid')

console.log(format(new Date(),'ddMMyyyy\tHH:mm:ss'));
console.log(uuid())

//while running each time you get a unique id
//when we want a unique id for generating we use this 
