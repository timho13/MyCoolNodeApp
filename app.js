const http = require('http');
var fs = require('fs');
const port=process.env.PORT || 3000
const server = http.createServer(function (req, res) {
  fs.readFile('demofile2.html', function(err, data2) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data2);
    res.end();
  });
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
