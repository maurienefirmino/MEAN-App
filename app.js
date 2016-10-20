'use strict';
const http = require('http');
const fs = require('fs');
const index = fs.readFileSync("index.html");

http.createServer((req,res) => { 
	res.writeHead(200,{"Content-Type":"text/html"});
	res.end(index);
}).listen(80,() => {
	console.log('Servidor Aberto em localhost');
});