var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('mongodb://tony:070695@ds131480.mlab.com:31480/nodeblog');
/* GET home page. */
router.get('/', function(req, res, next) {
    var db = req.db;
    var posts = db.get('posts');
    posts.find({}, {}, function(err, posts) {
        res.render('index', {"posts": posts});
    });
});
module.exports = router;
