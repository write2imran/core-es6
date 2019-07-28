var Bacon = require("baconjs"); 

var intervalObserable= Bacon 
.interval(1000) ;

intervalObserable
    .map( 
    ()=> 'a second has passed' 
) 
.onValue((str)=> console.log(str)); 