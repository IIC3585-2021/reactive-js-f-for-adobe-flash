const {fromEvent} = rxjs;
const { switchMap, delay, takeWhile, throttleTime} = rxjs.operators;
const interval = rxjs.interval;

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

let end_game = false;
let p1_dead = false;
let p2_dead = false;

const player1 = document.createElement('div')
player1.style.display = 'inline-block';
player1.style.marginTop = '52px';
player1.style.height = '20px';
player1.style.width = '20px';
player1.style['background-image'] = "url('blue_dino.gif')";

const static_div_2 = document.createElement('div');

const player2 = document.createElement('div')
player2.style.marginTop = '102px';
player2.style.height = '20px';
player2.style.width = '20px';
player2.style.position = 'absolute';
player2.style['background-image'] = "url('red_dino.gif')";

document.getElementById('game').appendChild(static_div);
static_div.appendChild(player1)

fromEvent(document, 'click')
  .pipe(
  	takeWhile(() => !end_game),
    throttleTime(600),
    switchMap(() => player1.style.marginTop = '42px'),
    delay(100),
    switchMap(() => player1.style.marginTop = '37px'),
    delay(100),
    switchMap(() => player1.style.marginTop = '32px'),
    delay(300),
    switchMap(() => player1.style.marginTop = '42px'),
    delay(100),
    switchMap(() => player1.style.marginTop = '52px'),
  )
  .subscribe();

  document.getElementById('game').appendChild(static_div_2);
  static_div_2.appendChild(player2)


fromEvent(document, 'keyup')
  .pipe(
    takeWhile(() => !end_game),
    throttleTime(600),
    switchMap(() => player2.style.marginTop = '92px'),
    delay(100),
    switchMap(() => player2.style.marginTop = '87px'),
    delay(100),
    switchMap(() => player2.style.marginTop = '82px'),
    delay(300),
    switchMap(() => player2.style.marginTop = '92px'),
    delay(100),
    switchMap(() => player2.style.marginTop = '102px'),
  )
  .subscribe();


const static_div_3 = document.createElement('div');
const static_div_4 = document.createElement('div');

static_div_3.style.height = '20px';
static_div_3.style.width = '200px';

static_div_4.style.height = '20px';
static_div_4.style.width = '200px';


document.getElementById('game').appendChild(static_div_3);
document.getElementById('game').appendChild(static_div_4);

let marginle1 = 350;
let marginle2 = 350;

const object1 = document.createElement('div')
object1.style.display = 'inline-block';
object1.style.marginTop = '37px';
object1.style.marginLeft = marginle1 + 'px';
object1.style.height = '15px';
object1.style.width = '20px';
object1.style['background-image'] = "url('cactus.png')";

const object2 = document.createElement('div')
object2.style.display = 'inline-block';
object2.style.marginTop = '87px';
object2.style.marginLeft = marginle2 + 'px';
object2.style.height = '15px';
object2.style.width = '20px';
object2.style['background-image'] = "url('cactus.png')";

static_div_3.appendChild(object1);
static_div_4.appendChild(object2);

const numbers = interval(20);

numbers.subscribe(() => {
  if (!end_game){
    marginle1 -= 5;
    marginle2 -= 5;
  }

  if (!end_game && marginle1 <= 15 && marginle1 >= 0 && player1.style.marginTop === '52px'){
    p1_dead = true;
    player1.style['background-image'] = "url('dead_blue.png')";
    document.getElementById('dot1').style.animationPlayState = 'paused'; 
    document.getElementById('dot2').style.animationPlayState = 'paused'; 


  }
  if (!end_game && marginle2 <= 15 && marginle2 >= 0 && player2.style.marginTop === '102px'){
    p2_dead = true;
    player2.style['background-image'] = "url('dead_red.png')";
    document.getElementById('dot3').style.animationPlayState = 'paused'; 
    document.getElementById('dot4').style.animationPlayState = 'paused'; 

  }
  if (!end_game){
    if (p1_dead && !p2_dead) {
      document.getElementById('game').innerHTML += '<br/>P2 WINS !!!!';
    } else if (!p1_dead && p2_dead) {
      document.getElementById('game').innerHTML += '<br/>P1 WINS !!!!';
    } else if (p1_dead && p2_dead) {
      document.getElementById('game').innerHTML += '<br/>TIE, YOU BOTH SUCK !!!!';
    }
  }
  end_game = p1_dead || p2_dead;

	if (marginle1 <=-40) {
		marginle1 = 350 + Math.floor(Math.random() * 350);
	}
	if (marginle2 <=-40) {
		marginle2 = 350 + Math.floor(Math.random() * 350);
	}
	object1.style.marginLeft = marginle1 + 'px';
  object1.style['opacity'] = marginle1 >= 350 ? 0 : 1;
	object2.style.marginLeft = marginle2 + 'px';
  object2.style['opacity'] = marginle2 >= 350 ? 0 : 1;
})






