const http = require('http');
var fs = require('fs');
var header="<html><head></head>";
var footer="</body></html>"
var topdata=header;
const port=process.env.PORT || 3000
 fs.readFile('demofile1.html', function(err, data1) {
     topdata=topdata+data1; 
  });
var server = http.createServer(function (req, res) {
  fs.readFile('demofile2.html', function(err, data2) {
    data2=topdata+data2+footer
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data2);
    data2=topdata;
    res.end();
  });
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
