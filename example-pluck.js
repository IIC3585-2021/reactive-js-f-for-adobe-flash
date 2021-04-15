// RxJS v6+
const from = require('rxjs').from;
const pluck = require('rxjs/operators').pluck;

const source = from([
  { name: 'Joe', age: 30 },
  { name: 'Sarah', age: 35 }
]);

//grab names

const example = source.pipe(pluck('name'))
console.log(example)
const subscribe = example.subscribe((val) => console.log(val))
console.log(subscribe)