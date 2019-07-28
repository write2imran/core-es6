var Bacon = require("baconjs"); 

//Print after every 1 secone
Bacon 
  .interval(1000) 
  .onValue( 
      ()=> console.log(new Date()) 
);


