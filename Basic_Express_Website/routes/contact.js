/*
* @Author: phuc.ngo
* @Date:   2016-09-27 08:39:46
* @Last Modified by:   phuc.ngo
* @Last Modified time: 2016-09-27 11:13:19
*/

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
	var transporter = nodemailer.createTransport({
		service:'Gmail',
		auth:{
			user:'ngohungphuc95@gmail.com',
			pass:'Ngohungtin61'
		},
		tls: { rejectUnauthorized: false }
	});

	var mailOptions = {
		from : 'Tony <ngohungphuc7695@gmail.com>',
		to: 'ngohungphuc95@gmail.com',
		subject:'Test Email',
		text : 'You have mail from: '+ req.body.name+ 'Email: ' + req.body.email + 'Message: ' + req.body.message,
		html:'<p>Following detail</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
	};
  	transporter.sendMail(mailOptions, function(err,info){
  		if (err) {
  			console.log(err);
  			res.redirect('/');
  		} else {
  			console.log('Message Sent: '+ info.response);
  			res.redirect('/');
  		}
  	});
});

module.exports = router;
