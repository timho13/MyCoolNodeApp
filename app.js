const http = require('http');
var fs = require('fs');
var data="";
const port=process.env.PORT || 3000
const server = http.createServer(function (req, res) {
  fs.readFile('demofile2.html', function(err, data2) {
    data=data2
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
