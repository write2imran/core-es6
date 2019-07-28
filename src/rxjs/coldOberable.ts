/**
 * Cold Obervable fires the same sequence for all the observers. 
 * Rx.Observable.from(iterable,[mapFunction],[context],[scheduler]);  
 * 
 */


var Rx = require('rxjs/Rx');


var observable = Rx.Observable.from([0,1,2]); 

observable.subscribe((a)=>console.log('first subscriber receives => '+a)); 

setTimeout(()=>{ 
    observable.subscribe((a)=>console.log('second subscriber receives => '+a)); 
},1000); 