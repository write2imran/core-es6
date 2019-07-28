var Bacon = require("baconjs"); 

//fromBinder allows to craete eventStream (obserable) from arbitrary source.
//Signature 
//Bacon.fromBinder(publisher); 


//So I am passing a custom fucntion called (publisher) which is generating values
var myCustomEventStream = Bacon.fromBinder(function(push){ 

    [1,2,3,4,5,6,7,8,9].map(val=> push(val));
    push(77);
    push(new Bacon.Error('NOW AN ERROR HAPPENED')); //it will continue to emmit next value, as there is no handler define to stop
    //push(new Bacon.End()); //End the stream
    push(100); //This value will not emmit as observable has ended.
    
 }).endOnError();

 //subscriber end
 myCustomEventStream
 .map(val=> val*1)
 .onValue(val => console.log(val));

/**
 * 
 *  
 */