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

export type PlayerVariant =
  | "forest_adventurer"
  | "inferno_knight"
  | "arcane_sage"
  | "orc_marauder"
  | "ember_champion";

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

export type MapTileVariant =
  | "column"
  | "column_wall"
  | "wall_fountain_mid_blue"
  | "wall_fountain_mid_red"
  | "wall_fountain_basin_red"
  | "wall_fountain_basin_blue"
  | "wall_goo_base"
  | "wall_goo"
  | "wall_hole_1"
  | "wall_hole_2"
  | "wall_banner_blue"
  | "wall_banner_red"
  | "wall_banner_green"
  | "wall_banner_yellow"
  | "floor_ladder"
  | "floor_spikes"
  | "hole"
  | "floor_stairs"
  | "floor_1"
  | "floor_2"
  | "floor_3"
  | "floor_4"
  | "floor_5"
  | "floor_6"
  | "floor_7"
  | "floor_8"
  | "wall_left"
  | "wall_mid"
  | "wall_right"
  | "wall_top_left"
  | "wall_top_mid"
  | "wall_top_right"
  | "button_red_up"
  | "button_red_down"
  | "button_blue_up"
  | "button_blue_down"
  | "lever_left"
  | "lever_right"
  | "doors_frame_left"
  | "doors_frame_right"
  | "doors_frame_top"
  | "doors_leaf_closed"
  | "doors_leaf_open"
  | "wall_edge_bottom_left"
  | "wall_edge_bottom_right"
  | "wall_edge_mid_left"
  | "wall_edge_top_left"
  | "wall_edge_left"
  | "wall_edge_top_right"
  | "wall_edge_right"
  | "wall_edge_mid_right"
  | "wall_edge_tshape_bottom_right"
  | "wall_edge_tshape_bottom_left"
  | "wall_edge_tshape_right"
  | "wall_edge_tshape_left"
  | "wall_outer_front_right"
  | "wall_outer_front_left"
  | "wall_outer_mid_left"
  | "wall_outer_top_left"
  | "wall_outer_top_right"
  | "wall_outer_mid_right"
  | "wall_fountain_top_1"
  | "wall_fountain_top_2"
  | "wall_fountain_top_3";

export type MapTileDefaultAttributes = {
  [key in MapTileVariant]: {
    size: PixelSize;
  };
};

export type BaseMapTile = Omit<Entity, "size" | "scale"> & {
  scale?: number;
  variant: MapTileVariant;
};

export type MapVariant = "lobby";

export type GridMapTile = Omit<BaseMapTile, "scale">;

export type GridMap = {
  mapName: string;
  width: number;
  height: number;
  tiles: GridMapTile[];
};

export type GridMapTileRelativePosition = {
  index: number;
  position?: Vector2;
};

export type BaseMap = {
  variant: MapVariant;
  relativePositions: GridMapTileRelativePosition[];
};
