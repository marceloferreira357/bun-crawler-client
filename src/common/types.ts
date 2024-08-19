export type Vector2 = {
  x: number;
  y: number;
};

export type Size = {} & Pick<React.CSSProperties, "width" | "height">;

export type Entity = {
  position?: Vector2;
  size?: Size;
} & Pick<React.CSSProperties, "scale" | "zIndex">;
