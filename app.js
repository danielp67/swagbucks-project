
let http = require('http')
let fs = require('fs')
let index = fs.readFileSync('index.html');


let server = http.createServer()

server.on('request', (request, response) => {

  //  fs.readFile('index.html')


    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(index);
})

server.listen(8080)