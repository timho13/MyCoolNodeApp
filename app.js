const http = require('http');
const port=process.env.PORT || 3000
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<h2>This is just a starter app, next is a Python app</h2><h1>Hello Worldy</h1>');
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
