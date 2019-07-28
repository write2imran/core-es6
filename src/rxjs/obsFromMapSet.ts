/**
 * Observable with Set and Map 
 * Rx.Observable.from(iterable,[mapFunction],[context],[scheduler]);  
 * 
 */


var Rx = require('rxjs/Rx');


var set = new Set([0, 1, 2]);
Rx.Observable
    .from(set)
    .subscribe((a) => console.log(a));


var map = new Map([['key0', 0], ['key1', 1], ['key2', 2]]);
Rx.Observable
    .from(map)
    .subscribe((a) => console.log(a));     