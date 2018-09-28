const http = require('http');
var fs = require('fs');
const port=process.env.PORT || 3000
const server = http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
  fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
