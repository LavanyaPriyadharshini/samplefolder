
//go to node.js documentation and copy the readfile and paste here, 
//in the documentation itself we have various factors

import { readFile } from 'node:fs';

//readFile('/etc/passwd', (err, data) => {
  readFile('./files/start.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString()); //convert to tostring to get the values correctly instead of seeing the buffer data
});

//in node.js documentation, go to "file system" and search read files , you see fs.readfile, in that
//click that and see the codes there--you will see all the necessary code for reading the file


// run the applicaiton using "node server.mjs"
//you will get a buffer data, so to get the correct string output, you have to give the tostring() in console



// PS C:\Users\lavanyap\Desktop\Node js\samplefolder> node server.mjs
// <Buffer 68 69 20 74 68 69 73 20 69 73 20 61 20 66 69 6c 65 20 63 72 65 61 74 65 64 20 69 6e 73 69 64 65 20 74 68 65 20 66 69 6c 65 73 20 66 6f 6c 64 65 72 2c ... 134 more bytes>


// PS C:\Users\lavanyap\Desktop\Node js\samplefolder> node server.mjs
// hi this is a file created inside the files folder, this is a data file which have the datas

// //so now go to server.mjs and give this file path there to access this file in the output  