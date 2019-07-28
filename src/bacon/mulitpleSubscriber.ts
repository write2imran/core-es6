var Bacon = require("baconjs"); 

var intervalObserable= Bacon 
.interval(1000);

intervalObserable
    .take(3)
    .map( 
    ()=> 'a second has passed' 
) 
.onValue((str)=> console.log(str));

intervalObserable
.take(5)
.onValue(()=> console.log("second subsriber")); 