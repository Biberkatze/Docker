const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('{"joke":"Roses are Red  Violets are Blue  Unexpected Indent  In line 22"}');
});

server.listen(port);