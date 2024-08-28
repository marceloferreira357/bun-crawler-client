import { PixelSize, PlayerGender, Vector2 } from "../../common/types";

export type Tile = Vector2 & PixelSize;

export type PlayerTiles = {
  [key in PlayerGender]: Tile[];
};
