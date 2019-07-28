var Bacon = require("baconjs"); 
/**
 * Property Stream vs EvenStream
 */

Bacon 
    .sequentially(1000,['a','b','c','d']) 
    .scan('=> ',(acc,b)=> acc+b)            //Changing the obserable emitted value
    .onValue((value)=>console.log(value));