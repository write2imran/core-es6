
var Rx = require('rxjs/Rx');    

const randomLetter = () => String.fromCharCode(
    Math.random() * ('z'.charCodeAt(0) - 'a'.charCodeAt(0)) + 'a'.charCodeAt(0));


var  random = Rx.Observable.create(randomLetter)
    
    .subscribe(x=> console.log(x));
    