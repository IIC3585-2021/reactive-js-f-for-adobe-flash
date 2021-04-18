
import { gameHeight, gameWidth, player1, player2, object1, object2 } from './constants';

const createElem = (column) =>
  (elem => (
    (elem.style.display = 'inline-block'),
    (elem.style.marginTop =
      column === player1 || column === object1 ? '80px' : '180px'),
    (elem.style.borderRadius =
      column === player1 || column === player2 ? '60%' : '0%'),
    (elem.style.height = '24px'),
    (elem.style.width = '24px'),
    (elem.style['background-color'] =
      column === object1 || column === object2 ? 'green' : column === player1 || column === player2  ? 'blue' : 'white'),
    elem
  ))(document.createElement('div'));

export const render = (state, road, playerPosition) =>
  (renderFrame => (
    road.objects.forEach(o => (renderFrame[o.x][0] = object)),
    (renderFrame[0][playerPosition.y] = player),
    renderFrame.forEach(r => {
      const rowContainer = document.createElement('div');
      r.forEach(c => rowContainer.appendChild(createElem(c)));
      document.getElementById('game').appendChild(rowContainer);
    })
  ))(
    Array(gameHeight)
      .fill(0)
      .map(e => Array(gameWidth).fill(0))
  );

export const renderGameOver = () =>
  (document.getElementById('game').innerHTML += '<br/>GAME OVER!!!');
