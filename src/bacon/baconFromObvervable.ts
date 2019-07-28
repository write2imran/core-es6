var Bacon = require("baconjs"); 

//Many functions to craete an observable from different sources
//Array, ClickEvent etc.


Bacon 
    .interval(1000) //source emiiter is generating an even but no value is associated with it, there for creating a new value using Map
    .map(val=> Math.random()*100)
    .onValue((event)=>{ 
        console.log(event); 
    }); 