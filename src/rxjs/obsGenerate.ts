/**
 * Cold Obervable fires the same sequence for all the observers. 
 * Sequence Factory
 * Rx.Observable.generate(initialState, 
 * conditionFunction, iterationFunction, resultFactory, [scheduler]);   
 * initialState: This can be any object, it is the first object used in the iteration
 *   conditionFunction: This is a function with the condition to stop the iteration
 *   iterationFunction: This is a function to be used on each element to iterate
 *   resultFactory: This is a function whose return is passed to the sequence
 *   scheduler: This is an optional scheduler
 */


var Rx = require('rxjs/Rx');


Rx.Observable.generate( 
    0, 
    (i) => i<3, 
    (i) => i+1, 
    (i) => i 
).subscribe((i) => console.log(i)); 

//Rx.Observable.range(first, count, [scheduler]); 
console.log("Using the range")
Rx.Observable 
    .range(0, 4) 
    .subscribe((i)=>console.log(i)); 

    //Rx.Observable.timer(dueTime, [interval], [scheduler]); 
    console.log("Interval with Timer (Duration)")
    Rx.Observable 
    .timer(1000,500) 
    .subscribe((i)=> console.log(i)); 