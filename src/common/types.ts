export type Vector2 = {
  x: number;
  y: number;
};

export type Size = Pick<React.CSSProperties, "width" | "height">;

export type Entity = {
  position?: Vector2;
  size?: Size;
} & Pick<React.CSSProperties, "scale" | "zIndex">;

export type Shape = {
  width: number;
  height: number;
} & Vector2;

export type Rectangle = Shape;

export type Circle = {
  radius: number;
} & Shape;
