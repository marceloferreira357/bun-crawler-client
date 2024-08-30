import { MapTileDefaultAttributes, PlayerDefaultAttributes } from "./types";

export const zIndex = {
  cursor: 10,
  debugCard: 9,
  controllerHud: 9,
};

export const credits = [
  {
    title: "Gamepad UI / Controller Prompts Pack",
    author: "greatdocbrown",
    href: "https://greatdocbrown.itch.io/gamepad-ui",
  },
  {
    title: "monogram",
    author: "datagoblin",
    href: "https://datagoblin.itch.io/monogram",
  },
  {
    title: "Sprout Lands UI Pack",
    author: "Cup Nooble",
    href: "https://cupnooble.itch.io/sprout-lands-ui-pack",
  },
  {
    title: "16x16 DungeonTileset II",
    author: "0x72",
    href: "https://0x72.itch.io/dungeontileset-ii",
  },
  {
    title: "RPG Essentials SFX - Free!",
    author: "Leohpaz",
    href: "https://leohpaz.itch.io/rpg-essentials-sfx-free",
  },
  {
    title: "Minifantasy - Dungeon Audio Pack",
    author: "Leohpaz",
    href: "https://leohpaz.itch.io/minifantasy-dungeon-sfx-pack",
  },
];

export const playerDefaultAttributes: PlayerDefaultAttributes = {
  forest_adventurer: {
    female: {
      size: {
        width: 15,
        height: 18,
      },
    },
    male: {
      size: {
        width: 15,
        height: 19,
      },
    },
  },
  inferno_knight: {
    female: {
      size: {
        width: 14,
        height: 23,
      },
    },
    male: {
      size: {
        width: 14,
        height: 23,
      },
    },
  },
  arcane_sage: {
    female: {
      size: {
        width: 15,
        height: 21,
      },
    },
    male: {
      size: {
        width: 14,
        height: 21,
      },
    },
  },
  orc_marauder: {
    female: {
      size: {
        width: 15,
        height: 19,
      },
    },
    male: {
      size: {
        width: 15,
        height: 19,
      },
    },
  },
  ember_champion: {
    female: {
      size: {
        width: 14,
        height: 22,
      },
    },
    male: {
      size: {
        width: 14,
        height: 22,
      },
    },
  },
};

export const mapTileDefaultAttributes: MapTileDefaultAttributes = {
  column: {
    size: {
      width: 16,
      height: 48,
    },
  },
  column_wall: {
    size: {
      width: 16,
      height: 48,
    },
  },
  wall_fountain_mid_blue: {
    size: {
      width: 16,
      height: 16,
    },
  },
  wall_fountain_mid_red: {
    size: {
      width: 16,
      height: 16,
    },
  },
  wall_fountain_basin_red: {
    size: {
      width: 16,
      height: 16,
    },
  },
  wall_fountain_basin_blue: {
    size: {
      width: 16,
      height: 16,
    },
  },
  wall_goo_base: {
    size: { width: 16, height: 16 },
  },
  wall_goo: {
    size: { width: 16, height: 16 },
  },
  wall_hole_1: {
    size: { width: 16, height: 16 },
  },
  wall_hole_2: {
    size: { width: 16, height: 16 },
  },
  wall_banner_blue: {
    size: { width: 16, height: 16 },
  },
  wall_banner_red: {
    size: { width: 16, height: 16 },
  },
  wall_banner_green: {
    size: { width: 16, height: 16 },
  },
  wall_banner_yellow: {
    size: { width: 16, height: 16 },
  },
  floor_ladder: {
    size: { width: 16, height: 16 },
  },
  floor_spikes: {
    size: { width: 16, height: 16 },
  },
  hole: {
    size: { width: 16, height: 16 },
  },
  floor_stairs: {
    size: { width: 16, height: 16 },
  },
  floor_1: {
    size: { width: 16, height: 16 },
  },
  floor_2: {
    size: { width: 16, height: 16 },
  },
  floor_3: {
    size: { width: 16, height: 16 },
  },
  floor_4: {
    size: { width: 16, height: 16 },
  },
  floor_5: {
    size: { width: 16, height: 16 },
  },
  floor_6: {
    size: { width: 16, height: 16 },
  },
  floor_7: {
    size: { width: 16, height: 16 },
  },
  floor_8: {
    size: { width: 16, height: 16 },
  },
  wall_left: {
    size: { width: 16, height: 16 },
  },
  wall_mid: {
    size: { width: 16, height: 16 },
  },
  wall_right: {
    size: { width: 16, height: 16 },
  },
  wall_top_left: {
    size: { width: 16, height: 16 },
  },
  wall_top_mid: {
    size: { width: 16, height: 16 },
  },
  wall_top_right: {
    size: { width: 16, height: 16 },
  },
  button_red_up: {
    size: { width: 16, height: 16 },
  },
  button_red_down: {
    size: { width: 16, height: 16 },
  },
  button_blue_up: {
    size: { width: 16, height: 16 },
  },
  button_blue_down: {
    size: { width: 16, height: 16 },
  },
  lever_left: {
    size: { width: 16, height: 16 },
  },
  lever_right: {
    size: { width: 16, height: 16 },
  },
  doors_frame_left: {
    size: { width: 16, height: 32 },
  },
  doors_frame_right: {
    size: { width: 16, height: 32 },
  },
  doors_frame_top: {
    size: { width: 32, height: 16 },
  },
  doors_leaf_closed: {
    size: { width: 32, height: 32 },
  },
  doors_leaf_open: {
    size: { width: 32, height: 32 },
  },
  wall_edge_bottom_left: {
    size: { width: 16, height: 16 },
  },
  wall_edge_bottom_right: {
    size: { width: 16, height: 16 },
  },
  wall_edge_mid_left: {
    size: { width: 16, height: 16 },
  },
  wall_edge_top_left: {
    size: { width: 16, height: 16 },
  },
  wall_edge_left: {
    size: { width: 16, height: 16 },
  },
  wall_edge_top_right: {
    size: { width: 16, height: 16 },
  },
  wall_edge_right: {
    size: { width: 16, height: 16 },
  },
  wall_edge_mid_right: {
    size: { width: 16, height: 16 },
  },
  wall_edge_tshape_bottom_right: {
    size: { width: 16, height: 16 },
  },
  wall_edge_tshape_bottom_left: {
    size: { width: 16, height: 16 },
  },
  wall_edge_tshape_right: {
    size: { width: 16, height: 16 },
  },
  wall_edge_tshape_left: {
    size: { width: 16, height: 16 },
  },
  wall_outer_front_right: {
    size: { width: 16, height: 16 },
  },
  wall_outer_front_left: {
    size: { width: 16, height: 16 },
  },
  wall_outer_mid_left: {
    size: { width: 16, height: 16 },
  },
  wall_outer_top_left: {
    size: { width: 16, height: 16 },
  },
  wall_outer_top_right: {
    size: { width: 16, height: 16 },
  },
  wall_outer_mid_right: {
    size: { width: 16, height: 16 },
  },
  wall_fountain_top_1: {
    size: { width: 16, height: 16 },
  },
  wall_fountain_top_2: {
    size: { width: 16, height: 16 },
  },
  wall_fountain_top_3: {
    size: { width: 16, height: 16 },
  },
};
