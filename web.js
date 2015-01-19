var PORT = 8080;

var express = require('express');

var app = express();

app.use(express.static(__dirname+"/public"));

app.listen(PORT,function(){
	console.log("Resume Web App started on port "+PORT);
})