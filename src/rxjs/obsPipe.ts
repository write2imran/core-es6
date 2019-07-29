const {Observable} = require('rxjs/Rx');
const {map, filter, scan } = require('rxjs/operators');


// Observable.interval(500)
// .subscribe(x=> console.log(x)) ;
//Output 0 1 2 3 4....


Observable.interval(250)

  .pipe(
    filter(x => x % 2 === 0),
    map(x => x + x),
    scan((acc, x) => acc + x)
  )
  .subscribe(x => console.log(x))

//Output 0 4 12 24 40 60 ...