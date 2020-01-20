const fs= require('fs')
const path = require('path')


//Create folder
// fs.mkdir(path.join(__dirname, 'test'),{},(err)=>{ 
//     if(err) throw err;
//     console.log('Folder created..');
// });

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),'Hello world how are you?',(err)=>{ 
//     if(err) throw err;
//     console.log('File written to..');
// });

//Append in a file
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),'And this is appended text',(err)=>{ 
//     if(err) throw err;
//     console.log('File appended..');
// });

//Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'),'utf8',(err, data)=>{ 
//     if(err) throw err;
//     console.log(data);
// });

//Rename a file
// fs.rename(path.join(__dirname, '/test', 'hello.txt'),path.join(__dirname, '/test', 'hello_renamed.txt'),(err)=>{ 
//     if(err) throw err;
//     console.log('File written to..');
// });
