var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('mongodb://tony:070695@ds131480.mlab.com:31480/nodeblog');
router.get('/add', function(req, res, next) {
    var categories = db.get('categories');
    categories.find({}, {}, function(req, categoriesList) {
        res.render('addpost', {
            "title": "Add Post",
            "categories": categoriesList
        });
    });
});
router.post('/add', function(req, res, next) {
    var title = req.body.title;
    var category = req.body.category;
    var body = req.body.body;
    var author = req.body.author;
    var date = new Date();
    if (req.files.mainimage) {
        console.log(req.files.mainimage);
        var mainImageOriginalName = req.files.mainimage.originalname;
        var mainImageName = req.files.mainimage.name;
        var mainImageMime = req.files.mainimage.mimetype;
        var mainImagePath = req.files.mainimage.path;
        var mainImageExt = req.files.mainimage.extension;
        var mainImageSize = req.files.mainimage.size;
    } else {
        var mainImageName = 'noimage.png';
    }
    //form validation
    req.checkBody('title', 'Title is required').notEmpty();
    req.checkBody('body', 'Body is required').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
        res.render('addpost', {
            'errors': errors,
            'title': title,
            'body': body
        });
    } else {
        var posts = db.get('posts');
        posts.insert({
            'title': title,
            'body': body,
            'category': category,
            'date': date,
            'author': author,
            'mainimage': mainimage
        }, function(err, post) {
            if (err) {
                res.send('Error');
            } else {
                req.flash('success', 'Post submitted');
                res.location('/');
                res.redirect('/');
            }
        });
    }
});
module.exports = router;
