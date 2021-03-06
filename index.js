const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    //Build file path
    let filePath = path.join(__dirname, 'public',req.url==='/'? 'index.html':
    req.url);
    // console.log(filePath);
    // res.end();

    let extName = path.extname(filePath);

    //initila content type
    let contentType= 'text/html';

    //Check ext and set content type
    switch(extName){
        case '.js':
            contentType= 'text/javascript';
            break;
        case '.css':
            contentType= 'text/css';
            break;
        case '.json':
            contentType='application/json';
            break;
        case '.png':
            contentType='images/png';
            break;
    }

    //Read file
    fs.readFile(filePath, (err, content)=>{
        if(err){
            if(err.code=='ENOENT'){
                //Page not found
                fs.readFile(path.join(__dirname, 'public', 'about.html',
                (err, content)=>{
                    res.writeHead(200, {'Content-type':'text/html'});
                    res.end(content,'utf8');
                }))
            } else{
                //Some serve error
                res.writeHead(500);
                res.end(`Server error: ${err.code}`);
            }
        }
        else{
            //success
            res.writeHead(200, {'Content-type':contentType});
            res.end(content,'utf8');
        }
    })
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));


// fs.readFile(
//     path.join(__dirname, 'public', 'about.html'),
//      (err, content) =>{
//         if(err) throw err;
//         res.writeHead(200,{'Content-type': 'text/html'});
//         res.end(content);
//     })
// if(req.url=== '/api/users')
// {
//        const users =[
//            {name: 'Sahil',
//         age: 22},
//         {
//             name: 'Bob',
//             age: 33
//         }
//        ];
//        res.writeHead(200, {'Content-type':'application/json'})
//        res.end(JSON.stringify(users));
// } 