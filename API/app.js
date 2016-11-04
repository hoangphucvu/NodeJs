/*
* @Author: hoangphucvu
* @Date:   2016-10-31 13:08:37
* @Last Modified by:   hoangphucvu
* @Last Modified time: 2016-11-04 15:43:30
*/

var express = require('express'),
mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/Books')
.get(function(req,res){
	Book.find(function(err,books){
		if (err)
			res.status(500).send(err);
		else
			res.json(books);

	});
});

app.use('/api',bookRouter);
app.get('/',function(req,res){
	res.send('Welcome');
});

app.listen(port,function(req,res){
	console.log('Running on port ' + port);
});
