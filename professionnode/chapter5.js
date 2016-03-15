/*var http = require('http');
var req = http.request(options,function(response){
	response.on('data',function(data){
		console.log('some data from the response',data);
	});
	response.on('end',function(){
		console.log('response ended');
	});
});
req.end();*/
/*var event = new (require('events').EventEmitter)();
event.on('data',function(){
	//console.log('i hava some data here');
	throw new Error("something wrong");
});
event.on('data',function(){
	console.log('i hava some data here,too');
});
event.emit('data');*/
var util = require('util');
EventEmitter = require('events').EventEmitter;
var Ticker = function(){
	var self = this;
	setInterval(function(){
		self.emit('tick');
	},1000);
};
util.inherits(Ticker,EventEmitter);
var ticker = new Ticker();
ticker.on("tick",function(){
	console.log('tick');
})