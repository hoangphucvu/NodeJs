/*
* @Author: phuc.ngo
* @Date:   2016-09-27 08:33:09
* @Last Modified by:   phuc.ngo
* @Last Modified time: 2016-09-27 08:33:29
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;
