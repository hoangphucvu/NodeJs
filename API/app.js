/*
* @Author: hoangphucvu
* @Date:   2016-10-31 13:08:37
* @Last Modified by:   hoangphucvu
* @Last Modified time: 2016-10-31 13:15:02
*/

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/',function(req,res){
	res.send('Welcome');
});

app.listen(port,function(req,res){
	console.log('Running on port ' + port);
});
