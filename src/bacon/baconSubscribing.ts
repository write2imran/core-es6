var Bacon = require("baconjs"); 
/**
 * When you respond to obserable value it is a way of subscribing or listen to value.
 * Methods in bacon are onValue, log, assing, onError and end.
 */

var initialValue =0; 
Bacon 
    
    .fromArray([1,2,3,4,5]) 
    .toProperty(initialValue)     
    .onValue((number)=>console.log(number));