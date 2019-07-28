/**
 * Iterable Sysntax 
 * Rx.Observable.from(iterable,[mapFunction],[context],[scheduler]);  
 * 
 */


var Rx = require('rxjs/Rx');


var log = console.log;

//mapFunction is not working...
//Rx.Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9], (a)=> a*2)
Rx.Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9] )
    .subscribe(
        (val) => { log(val) }
    ) 


    