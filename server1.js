

const fs =require('fs')
const path=require('path')


// 1. READFILE USING FS

 fs.readFile(path.join(__dirname,'files','start.txt'),'utf8', (err, data) => { 
  if (err) throw err;
  console.log(data.toString()); 

});


//2 .WRITE FILE USING FS

//after executing the below option ,you will see the write.txt gets added under files folder

fs.writeFile(path.join(__dirname,'files','writefile.txt'),'Hi this is a write file,here we give the content by writing', (err) => { 
  if (err) throw err;
  console.log('write complete')

});



// 3. UPDATE THE WRITE FILE USING APPEND METHOD

//inside the writetxt the below content gets updated to the existing line
fs.appendFile(path.join(__dirname,'files','writefile.txt'),'\n\n Thanks for updating', (err) => { 
  if (err) throw err;
  console.log('append complete')

});



//4. you can add a file using the append method ---- adding a new append file under files folder
fs.appendFile(path.join(__dirname,'files','appendfile.txt'),'creating a new append file', (err) => { 
  if (err) throw err;
  console.log('append complete')
});


// 5. RENAMING THE EXISTING FILE---renaming the append file to "rename file"
//after this code the append file name gets changed to rename

fs.rename(path.join(__dirname,'files','appendfile.txt'),path.join(__dirname,'files','Rename.txt'), (err) => { 
  if (err) throw err;
  console.log('append complete')
});


//---------------------------IMPORTANT - FSPROMISES ------------------------

// NOW TO REDUCE THE CALLBACK HELL, BY WRITING THE FUNCTIONS CONTINUOULY OR MENTIONING THE FUNCTIONS INSIDE THE FUNCTIONS RECURSIVELY ,IT CREATES A CALL BACK HELL,SO IN JS WE USE PROMISES
//AND ASYNC AND AWAIT TO REDUCE THE CALL BACK HELL, BUT IN NODE WE USE THE CONCEPT OF FSPROMISES
// REFER IN SERVER2.JS FILE



// OUTPUT

//PS C:\Users\lavanyap\Desktop\Node js\samplefolder> node server1
//hi this is a file created inside the files folder, this is a data file which have the datas

//so now go to server.mjs and give this file path there to access this file in the output  