const http = require('http');
const port=process.env.PORT || 3000
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.write("The date and time will go here");
res.write("This page is a sandbox to try out new ideas.");
res.end('<h1>Hello Worldy</h1><h5>Thanks to Rohit Ramname for the initial instruction to get something showing on a publicly available page outside my home network. Available at: https://medium.freecodecamp.org/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe</h5>');
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
