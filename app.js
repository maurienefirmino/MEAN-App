'use strict';
const http = require('http');
const fs = require('fs');
const index = fs.readFileSync("index.html");

http.createServer((req,res) => { 
	res.writeHead(200,{"Content-Type":"text/html"});
	res.end(index);
}).listen(5000,() => {
	console.log('Servidor Web Aberto em localhost');
});