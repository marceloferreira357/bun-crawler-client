type Tile = {
  x: number;
  y: number;
  active: boolean;
  width: number;
  height: number;
};

export type Tiles = {
  keyUp: Tile[];
  keyDown: Tile[];
};
