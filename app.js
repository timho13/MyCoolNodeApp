const http = require('http');
var dt = require('./utilities');
const port=process.env.PORT || 3000
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.write('This page is a sandbox to try out new ideas.'+'</br>');
res.write('The date and time of the last refresh are: '+ dt.myDateTime() +'</br>');
res.write('</br>');
 
res.write('Find the code for this page on ' + '<a href="https://github.com/timho13/MyCoolNodeApp/">Github</a>'+'</br>');
res.write('</br>');
res.write('Acknowledgments:'+'</br>');

res.write('Thanks to Rohit Ramname for the initial instruction to get something showing on a publicly available page outside my home network. Available ' + '<a href="https://medium.freecodecamp.org/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe">here</a>');
res.write('</br>');
res.end('<h1>Hello World</h1>');
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
