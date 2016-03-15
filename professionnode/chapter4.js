var buf = new Buffer('my buffer content');
//var buf = new Buffer(1024);
/*console.log(buf[32]);
console.log(buf.length);
var bb = new Buffer(10);
for(var i=0;i<10;++i){
	console.log(bb[i]);
}*/
var buff = new Buffer("this is the content of my buffer");
var smallbuff = buff.slice(8,19);
console.log(smallbuff.toString());
console.log(buff.toString());
smallbuff[3] = 88;
console.log(smallbuff.toString());
console.log(buff.toString());
var buff1 = new Buffer(11);
buff.copy(buff1,0,8,19);
console.log(buff1.toString());