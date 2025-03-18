
//this code is used to show how to read a large file with 1000 and lacs of lines and how to read lacs of lines in a file
//so for that we use create read stream and create write stream
//the contents gets copied as stream to another file

//here there are 1000 of lines in bigfile.txt means , we split those big files into small chunks of data, and then write it to hte new big file 
// this is how we read a big file of data
//create a file under bigfiledata named bigfile,txt
//dont create newbigfile.txt
//have some 1000 lines text in the bigfile.txt
//and then run the code

const fs= require('fs')
const path=require('path');


// Correct usage of path.join to properly join file paths
const rs = fs.createReadStream(path.join(__dirname, 'bigfiledata', 'bigfile.txt'), { encoding: 'utf8' });
const ws = fs.createWriteStream(path.join(__dirname, 'bigfiledata', 'newbigfile.txt'));

const ws1 = fs.createWriteStream(path.join(__dirname, 'bigfiledata', 'newbigfile2.txt'));



//using the 'on' listener ,we read the data
rs.on('data',(dataChunk) => {
    ws.write(dataChunk)
})


//run the code using "node stream"
//now you will see the text of bigfile .txt gets copied to newbigfile.txt


rs.pipe(ws1) //this way also you can copy the big text from one file and write to another file