

// this method is for creating a new own directory

//we are going to make a directory using mkdir

//which is just creating a folder

const fs=require('fs')



//rmdir is the remove directory
//this removes the directory
 if(fs.existsSync('./newFolder')){
    fs.rmdir('./newFolder',(err) => { //here a new folder will get created
        if(err) throw err
        console.log('Directory Removed')
    })
}


//after removing ,it creates a new directory using mkdir- make directory
//if the new folder is not created ,then only the directory will get created--here we use "existsync"
if(!fs.existsSync('./newFolder')){
    fs.mkdir('./newFolder',(err) => { //here a new folder will get created
        if(err) throw err
        console.log('Directory created')
    })
}




//exist on uncaught errors

process.on('uncaughtException',err => {
    console.error(`there was an uncaught error: ${err}`)
    process.exit(1);
})

