/*
 * @Author: phuc.ngo
 * @Date:   2016-09-26 13:10:42
 * @Last Modified by:   phuc.ngo
 * @Last Modified time: 2016-09-26 14:14:38
 */

var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

var mineTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};

http.createServer(function(req,res) {
    var uri = url.parse(req.url).pathname;
    //return current working dir
    var fileName = path.join(process.cwd(), unescape(uri));
    console.log('Loading ' + uri);
    var stats;

    try {
        //look for file
        stats = fs.lstatSync(fileName);
    } catch (e){
        //if not found send 404
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.write('404 not found');
        res.end();
        return;
    }

    //check if file/directory
    //if the file return 200 status code
    if (stats.isFile()) {
        var mineType = mineTypes[path.extname(fileName).split(".").reverse()[0]];
        res.writeHead(200, { 'Content-type': mineType });

        var fileStream = fs.createReadStream(fileName);
        fileStream.pipe(res);
    } else if(stats.isDirectory()) {
    	res.writeHead(302,{
    		'Location': 'index.html'
    	});
    	res.end();
    } else {
    	res.writeHead(500,{'Content-Type':'text/plain'});
    	res.write('500 error');
    	res.end();
    }
}).listen(3000);
