/**
 * Cold Obervable fires the same sequence for all the observers. 
 * Observable from callBack
 * Rx.Observable.fromCallback(func,[context],[selector]);  
 * Changed
 * Rx.Observable.bindCallback(func,[context],[selector]);  
 * 
 */


var Rx = require('rxjs/Rx');
var fs = require('fs');

var isExists = Rx.Observable.bindCallback(fs.exists);

var source = isExists('./src/rxjs/obsFromIterable.ts')
    .subscribe(
        (x) => console.log("Next "+x),
        (err) => console.log("Error "+err),
        (done) => console.log("Completed")

    );
setInterval(()=> {source.unsubscribe(); console.log("unsubscribed")},2000);

console.log("****Different Callback****")    
var myAsyncComputation = function(name,callback){ 
    setTimeout(()=>{ 
        callback(null,'Finished computation for '+name); 
},100); 
}; 

myAsyncComputation('John Doe',(err,result)=>console.log(result)); 

var observableFromCallback = Rx.Observable.bindCallback(myAsyncComputation); 

observableFromCallback('Carl Dismuke') 
        .subscribe((result)=> console.log(result)); 