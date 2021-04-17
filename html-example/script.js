const fromEvent = rxjs.fromEvent
const { map, tap, switchMap } = rxjs.operators;
const of = rxjs.of;
const interval = rxjs.interval;

fromEvent(document, 'click')
  .pipe(
    // restart counter on every click
    switchMap(() => interval(1000))
  )
  .subscribe(console.log);



const source = of(1, 2, 3, 4, 5);
// transparently log values from source with 'tap'
const example = source.pipe(
  tap(val => console.log(`BEFORE MAP: ${val}`)),
  map(val => val + 10),
  tap(val => console.log(`AFTER MAP: ${val}`))
);

//'tap' does not transform values
//output: 11...12...13...14...15
const subscribe = example.subscribe(val => console.log(val));

const clicks = fromEvent(document, "click");
clicks.subscribe(x => console.log(x));

// Results in:
// MouseEvent object logged to console every time a click
// occurs on the document.
