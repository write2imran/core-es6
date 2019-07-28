var Bacon = require("baconjs"); 

var intervalObserable= Bacon 
.interval(1000);

intervalObserable
    .take(3)
    .map( ()=>"nothing is emitting")
    .doAction(()=>{console.log("doing action ")})
    .log();
 
