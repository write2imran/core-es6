/**
 * Iterable Sysntax 
 * Rx.Observable.from(iterable,[mapFunction],[context],[scheduler]);  
 * 
 */


var Rx = require('rxjs/Rx');

var observableFromArgumentsFactory = function(){ 
    return Rx.Observable.from([...arguments,3,2,1]); 
}; 
observableFromArgumentsFactory(9,8,7,6,5,4) 
    
    .subscribe((a)=>console.log(a)); 