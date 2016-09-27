/*
* @Author: phuc.ngo
* @Date:   2016-09-27 08:39:46
* @Last Modified by:   phuc.ngo
* @Last Modified time: 2016-09-27 08:40:00
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
