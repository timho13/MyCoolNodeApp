const http = require('http');
var fs = require('fs');
var header="<html>";
var data=header;
const port=process.env.PORT || 3000
 fs.readFile('demofile1.html', function(err, data1) {
    data=data+data1
    
  });

var server = http.createServer(function (req, res) {
  fs.readFile('demofile2.html', function(err, data2) {
    data=data+data2
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    data=header;
    res.end();
  });
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
