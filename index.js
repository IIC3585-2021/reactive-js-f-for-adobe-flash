import {
  interval,
  fromEvent,
  combineLatest,
  of,
  BehaviorSubject,
  noop
} from 'rxjs';
import {
  scan,
  tap,
  pluck,
  startWith,
  takeWhile,
  finalize,
  switchMap
} from 'rxjs/operators';

const game_speed = new BehaviorSubject(200);

const players_keys = fromEvent(document, 'keyup').pipe(
  startWith({ code: '' }),
  pluck('code')
)

const player$ = keys$.pipe(
  scan(),
  scan()
);