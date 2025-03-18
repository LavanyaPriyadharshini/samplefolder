
//THIS IS AN EXAMPLE OF IMPORT FILE FS, I HAVE USED THE require OPTION IN ANOTHER SERVER1.MJS SEE THERE

//in require file you cannot use the server.mjs extensio, so save as server1.js

//go to node.js documentation and copy the readfile and paste here, 
//in the documentation itself we have various factors

import { readFile } from 'node:fs';

// 1 . option 1

//readFile('/etc/passwd', (err, data) => {
  readFile('./files/start.txt', (err, data) => { 
  if (err) throw err;
  console.log(data.toString()); //convert to tostring to get the values correctly instead of seeing the buffer data

});


// 2. option 2

readFile('./files/start.txt', 'utf8',(err, data) => { //utf8 is the data will be read and sent in a readable form, see the documentation,utf8 is the encoding to read the data,
  if (err) throw err;
  console.log(data); //when you use utf 8 ,you need not give the tostring in the console , so you can either choose option 1 or 2

});



console.log("hiiiiiiiiiiiii")  //------------ read the data asynchrounously in node.js, 1st it prints the hi and then display the below exception
//PS C:\Users\lavanyap\Desktop\Node js\samplefolder> node server.mjs
//hiiiiiiiiiiiii
//there was an uncaught error: Error: ENOENT: no such file or directory, open 'C:\Users\lavanyap\Desktop\Node js\samplefolder\files\startrtretre.txt'
//PS C:\Users\lavanyap\Desktop\Node js\samplefolder> 


//exit on uncaught errors
//if there is an exception ,this part of the code gets executed
//process is the default keyword of node
process.on('uncaughtException',err => {
  console.log(`there was an uncaught error: ${err}`)
  process.exit(1)
})

//code with error to test the above options, here i changed the path of the filenam as strttter, so this the eror

readFile('./files/startrtretre.txt', 'utf8',(err, data) => { //utf8 is the data will be read and sent in a readable form, see the documentation,utf8 is the encoding to read the data,
  if (err) throw err;
  console.log(data); //when you use utf 8 ,you need not give the tostring in the console , so you can either choose option 1 or 2

});
//PS C:\Users\lavanyap\Desktop\Node js\samplefolder> node server.mjs
//there was an uncaught error: Error: ENOENT: no such file or directory, open 'C:\Users\lavanyap\Desktop\Node js\samplefolder\files\startrtretre.txt'
//PS C:\Users\lavanyap\Desktop\Node js\samplefolder> 






//DIFFERENCE BETWEEN FS AND REQUIRE

// 1. if you use fs - import { readFile } from 'node:fs';
// the code will run specifically for the readfile alone and other functions does not work
// if you instead give in require , all functions of fs can be called and executed, like fs.readfile, fs.writefile etc.


//notes

//node.js reads file asynchronously the entire content


//in node.js documentation, go to "file system" and search read files , you see fs.readfile, in that
//click that and see the codes there--you will see all the necessary code for reading the file


// run the applicaiton using "node server.mjs"
//you will get a buffer data, so to get the correct string output, you have to give the tostring() in console



// PS C:\Users\lavanyap\Desktop\Node js\samplefolder> node server.mjs
// <Buffer 68 69 20 74 68 69 73 20 69 73 20 61 20 66 69 6c 65 20 63 72 65 61 74 65 64 20 69 6e 73 69 64 65 20 74 68 65 20 66 69 6c 65 73 20 66 6f 6c 64 65 72 2c ... 134 more bytes>


// PS C:\Users\lavanyap\Desktop\Node js\samplefolder> node server.mjs
// hi this is a file created inside the files folder, this is a data file which have the datas

// //so now go to server.mjs and give this file path there to access this file in the output  