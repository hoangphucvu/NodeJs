var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('mongodb://tony:070695@ds131480.mlab.com:31480/nodeblog');
router.get('/add', function(req, res, next) {
    res.render('addpost', {"title": "Add Post"});
});
router.post('/add', function(req, res, next) {
    var title = req.body.title;
    var category = req.body.category;
    var body = req.body.body;
    var author = req.body.author;
    var date = new Date();
    if (req.files.mainimage) {
        var mainImageOriginalName = req.files.mainimage.originalname;
        var mainImageName = req.files.mainimage.name;
        var mainImageMime = req.files.mainimage.mimetype;
        var mainImagePath = req.files.mainimage.path;
        var mainImageExt = req.files.mainimage.extension;
        var mainImageSize = req.files.mainimage.size;
    } else {
        var mainImageName = 'noimage.png';
    }
});
module.exports = router;
