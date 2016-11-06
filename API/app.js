var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var port = process.env.PORT || 3000;

//() to excute function
bookRouter = require('./routes/BookRoute')(Book);

app.use('/api', bookRouter);



app.get('/', function(req, res){
    res.send('welcome to my API!');
});

app.listen(port, function(){
    console.log('Gulp is running my app on  PORT: ' + port);
});