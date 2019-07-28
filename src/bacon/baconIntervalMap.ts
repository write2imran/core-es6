var Bacon = require("baconjs"); 



//Display current after every second.
//Interval method is generating infinite events after every second but 
//take() method provides a way to define how many events you want to listen or respond.

Bacon 
  .interval(1000) 
  .take(3)  //Only take first three events from Evenstram
  .map(new Date())
  .onValue( 
      (newDate)=> console.log("Using Map: "+newDate) 
);
