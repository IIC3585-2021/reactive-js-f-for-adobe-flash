const {fromEvent} = rxjs;
const { map, tap, switchMap, delay } = rxjs.operators;
const of = rxjs.of;
const interval = rxjs.interval;

import {player} from './con.js';




const createElem = (elem => (
    (elem.style.display = 'inline-block'),
    (elem.style.marginLeft = '3px'),
    (elem.style.height = '12px'),
    (elem.style.width = '6px'),
    (elem.style.borderRadius = '40%'),
    (elem.style['background-color'] ='green'),
    elem
  ))(document.createElement('div'));


const static_div = document.createElement('div');

static_div.style.height = '20px';
static_div.style.height = '20px';

const player1 = document.createElement('div')
player1.style.display = 'inline-block';
player1.style.marginTop = '52px'; // 32 tope superior
player1.style.height = '20px';
player1.style.width = '20px';
player1.style['background-color'] ='blue';
player1.style.borderRadius = '40%'

const static_div_2 = document.createElement('div');

const player2 = document.createElement('div')
//player2.style.display = 'inline-block';
player2.style.marginTop = '102px'; // 32 tope superior
player2.style.height = '20px';
player2.style.width = '20px';
player2.style.position = 'absolute';
player2.style['background-color'] ='red';
player2.style.borderRadius = '40%'

document.getElementById('game').appendChild(static_div);
static_div.appendChild(player1)

fromEvent(document, 'click')
  .pipe(
    switchMap(() => player1.style.marginTop = '42px'),
    delay(100),
    switchMap(() => player1.style.marginTop = '37px'),
    delay(100),
    switchMap(() => player1.style.marginTop = '32px'),
    delay(500),
    switchMap(() => player1.style.marginTop = '42px'),
    delay(100),
    switchMap(() => player1.style.marginTop = '52px'),

  )
  .subscribe(console.log);

  document.getElementById('game').appendChild(static_div_2);
  static_div_2.appendChild(player2)


fromEvent(document, 'keyup')
  .pipe(
    switchMap(() => player2.style.marginTop = '92px'),
    delay(100),
    switchMap(() => player2.style.marginTop = '87px'),
    delay(100),
    switchMap(() => player2.style.marginTop = '82px'),
    delay(500),
    switchMap(() => player2.style.marginTop = '92px'),
    delay(100),
    switchMap(() => player2.style.marginTop = '102px'),

  )
  .subscribe(console.log);