var Bacon = require("baconjs"); 

//Eventstream from Promise which gives single value 10
Bacon 
  .fromPromise(Promise.resolve(10) ) //
  .map(value => value * 5)  //Modifier
  .onValue((value)=> console.log(value)); //subscribe and handle 


