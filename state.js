const { noop } =  rxjs;

const handleCollision = (state, road, player) =>
  (road.objects[0].x === 0 && 0 === player.y
    ? (state.game_over = true)
    : noop)


export const updateState = () => (
  _,
  game
) => (
  handleCollision(game),
  // updateSpeed(game, gameSpeed),
  game
);