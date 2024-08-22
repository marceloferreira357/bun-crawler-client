import { Tiles } from "./controllerHudTypes";

const resetTiles = (tiles: React.MutableRefObject<Tiles>) => {
  tiles.current.keyUp.forEach((tile) => (tile.active = false));
  tiles.current.keyDown.forEach((tile) => (tile.active = false));
  tiles.current.keyUp[0].active = true;
};

export const getActiveKeySpriteSheetTile = (
  tiles: React.MutableRefObject<Tiles>
) => {
  return Object.values(tiles.current)
    .flat()
    .find((tile) => tile.active);
};

export const updateKeySpriteSheetTiles = (
  intervalAccumulator: React.MutableRefObject<number>,
  deltaTime: number,
  pressedKeys: string[],
  tiles: React.MutableRefObject<Tiles>,
  keys: string[]
) => {
  intervalAccumulator.current += deltaTime;

  if (intervalAccumulator.current >= 64) {
    if (pressedKeys.includes(keys[0]) || pressedKeys.includes(keys[1])) {
      if (tiles.current.keyUp[0].active) {
        tiles.current.keyUp[0].active = false;
        tiles.current.keyDown[0].active = true;
      } else if (tiles.current.keyDown[0].active) {
        tiles.current.keyDown[0].active = false;
        tiles.current.keyDown[1].active = true;
      }
    } else {
      if (tiles.current.keyDown[1].active) {
        tiles.current.keyDown[1].active = false;
        tiles.current.keyUp[1].active = true;
      } else if (tiles.current.keyUp[1].active) {
        tiles.current.keyUp[1].active = false;
        tiles.current.keyUp[0].active = true;
      } else {
        resetTiles(tiles);
      }
    }

    intervalAccumulator.current = 0;
  }
};
