export type Vector2 = {
  x: number;
  y: number;
};

export type Size = Pick<React.CSSProperties, "width" | "height">;

export type Entity = {
  position?: Vector2;
  size?: Size;
} & Pick<React.CSSProperties, "scale" | "zIndex">;

export type PixelSize = {
  width: number;
  height: number;
};

export type Shape = Vector2 & PixelSize;

export type Rectangle = Shape;

export type Circle = {
  radius: number;
} & Shape;

export type CursorVariant =
  | "triangle1"
  | "triangle2"
  | "triangle3"
  | "hand"
  | "pointing"
  | "holding";

export type Direction = "up" | "left" | "down" | "right";

export type Tile = Vector2 & PixelSize;

export type BaseCharacter = Omit<Entity, "size" | "scale"> & {
  direction: Direction;
  scale?: number;
  size: PixelSize;
  tiles: Tile[];
};

export type PlayerVariant = "forest_adventurer";

export type PlayerGender = "male" | "female";

export type PlayerDefaultAttributes = {
  [key in PlayerVariant]: {
    [key in PlayerGender]: {
      size: PixelSize;
    };
  };
};

export type BasePlayer = {
  gender: PlayerGender;
  variant: PlayerVariant;
} & BaseCharacter;

export type BaseEnemy = BaseCharacter;
