var querystring = require("querystring");
var fs = require('fs');
var formidable = require("formidable");
function start(res){
    console.log("call 'start' function")
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" '+
        'content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" '
        + 'method="post"></form>'+
        '<input type="file" name="upload">'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(body);
    res.end();
}
function upload(res,req){
    console.log("call 'upload' function")
    var form = new formidable.IncomingForm();
    fs.renameSync(files.upload.path, "/nodebegin/test.png");
    res.writeHead(200,{'Content-Type':'text/html'});
    console.log(files.upload.path);
    res.write('received image:<br/>');
    res.end();
}
function show(res){
    console.log("show function");
    fs.readFile('/nodebegin/test.png','binary',function(error,file){
        if(error){
            res.writeHead(500,{'Content-Type':'text/plain'});
            res.write(error + '\n');
            res.end();
        } else {
            res.writeHead(200,{"Content-Type":"image/png"});
            res.write(file,'binary');
            res.end();
        }
    })
}

exports.start = start;
exports.upload = upload;
exports.show = show;