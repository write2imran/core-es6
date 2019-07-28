var Bacon = require("baconjs"); 

//Eventemiiter and event
// .fromEvent(eventEmitter, event)

var fs = require('fs'); 
var FILE_PATH = './src/bacon/baconintervalMap.ts'; 
var readStream = fs.createReadStream(FILE_PATH,'utf8'); 

readStream.on('data',(content)=> {console.log(content)});

//Same code but using Bacon EventStream emitter.

console.log("**********************");
console.log("**********************");
console.log("**********************");


var eventStream = Bacon.fromEvent(readStream, 'data')

eventStream
.map(content => "[\n"+content+"\n]")
.onValue(content=> console.log(content))

