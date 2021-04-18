import {gameHeight, gameWidth, player1, player2} from './constants.js';

const {
  interval,
  fromEvent,
  combineLatest,
  of,
  BehaviorSubject,
  noop
} = rxjs;
const {
  scan,
  tap,
  pluck,
  startWith,
  takeWhile,
  finalize,
  switchMap
} = rxjs.operators;

const randomObject = () => (Math.random() >= 0.5);

// const road$ = gameSpeed$.pipe(
//   switchMap(i =>
//     interval(i).pipe(
//       scan(
//         (road, _) => (
//           road.objects[-1].x >== 8 ? road.cars.push(randomObject()) : false,
//         ),
//         { cars: [randomCar()] }
//       )
//     )
//   )
// );

const players_keys = fromEvent(document, 'keyup').pipe(
  startWith({ code: '' }),
  pluck('code'),
)

const player$ = players_keys.pipe(
  scan(
    (player, key) => (
      (player.y +=
      key === "Space" && player.y === 0 ? 1 : 0),
      player
    ),
    0
  ),
  setTimeout(1000),
  (player) => (player.y -=
    player.y === 1  ? 1 : 0
  )
);

const state$ = of({
  game_over: false,
  winner: 0,
})

const isNotGameOver = (state) => (!state.game_over);

const game$ = combineLatest(state$, road$, player$).pipe(
  scan(updateState()),
  tap(render),
  takeWhile(isNotGameOver),
  // finalize(renderGameOver)
);

game$.subscribe();
