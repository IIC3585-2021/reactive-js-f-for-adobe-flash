// RxJS v6+
const from = require('rxjs').from;
const pluck = require('rxjs/operators').pluck;
const tap = require('rxjs/operators').tap;
const BehaviorSubject = require('rxjs').BehaviorSubject;

const source = from([
  { name: 'Joe', age: 30 },
  { name: 'Sarah', age: 35 }
]);

//grab names

const example = source.pipe(pluck('name'))
//example.subscribe(console.log)


const subject = new BehaviorSubject({ name: 'Joe', age: 30 });

const other_example = subject.pipe(pluck('name'))
other_example.subscribe(val => console.log(val))

// const subscribe = example.subscribe((val) => console.log(val))
other_example.next({ name: 'Sí', age: 30 })
