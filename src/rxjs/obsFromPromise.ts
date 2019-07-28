/**
 * Cold Obervable fires the same sequence for all the observers. 
 * Observable from Promise
 * Rx.Observable.fromPromise(promise); 
 * 
 * Promises/A+ is a specification of promises. All the famous promises libraries in JavaScript follow this pattern; 
 * it is the same pattern followed by the standard ES6 promise.
 * 
 * 
 */


var Rx = require('rxjs/Rx');


Rx.Observable 
    .fromPromise(Promise.resolve('Hello World')) 
    .subscribe((result)=> console.log(result)); 
  
     
//Let's create an observable from a factory function returning a promise

// var promiseFactory = () => Promise.resolve('Hello World Again!!') 
// Rx.Observable 
//     .fromPromise(promiseFactory) 
//     .subscribe((result)=> console.log(result)); 

