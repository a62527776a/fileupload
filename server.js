var http = require('http');
var url = require('url');
function start(route,handle){
	function onRequest(req,res){
		var pathname = url.parse(req.url).pathname;// 访问的路由
		route(handle,pathname,res,req);
	}
	http.createServer(onRequest).listen(8888);
}
exports.start = start;