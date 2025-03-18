

// TO PREVENT CALLBACK HELLS, IN NODE WE USE THE CONCEPT OF ASYNC AND AWAIT LIKE IN JS FOR ASYNCHRONUOUSLY WRITE THE CODE EFFICIENTLY

//here i used the file folder as "promisesfiles"

const path=require('path')
const fsPromises = require('fs').promises

const fileOps=async () =>{
    try{
        //using fspromises we use to read the file
        //the below codes execute line by line asynchronously withpout call back hell
        const data = await fsPromises.readFile(path.join(__dirname,'promisefiles','start.txt'),'utf8')  
        console.log(data)    
        
        await fsPromises.writeFile(path.join(__dirname,'promisefiles','writefile.txt'),'Hi this is a write file,here we give the content by writing'),        
          console.log('write complete')    
          
          await fsPromises.appendFile(path.join(__dirname,'promisefiles','writefile.txt'),'\n\n Thanks for updating')
          console.log("append file");
          

        //   await fsPromises.rename(path.join(__dirname,'promisefiles','appendfile.txt'),path.join(__dirname,'promisefiles','Rename.txt')), 
        //     console.log('append complete')  ;
            

            //DELETING A FILE USING UNLINK
            //while deleting here i am using the rename file for append file, if the append file is not found ,then it throws error as it executes asynchronously
            //so cooment the above rename file option and run this code, then the rename.txt gets deleted
            await fsPromises.unlink(path.join(__dirname, 'promisefiles', 'Rename.txt'));
            console.log('DELETE complete')  ;
            
     
    }

    catch(err){
        console.error(err)
    }
}

//calling the function
fileOps()



// OUTPUT

//PS C:\Users\lavanyap\Desktop\Node js\samplefolder> node server2
//hi this is a file created inside the files folder, this is a data file which have the datas

//so now go to server.mjs and give this file path there to access this file in the output  
//PS C:\Users\lavanyap\Desktop\Node js\samplefolder> 