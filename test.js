var http :require('http');
var onReceive = function(req,res){
	res.write('<h1> test1</h1>);
	res.end();
};
var app = http.createServer(onReceive);
app.listen(9000);
console.log("test web");

