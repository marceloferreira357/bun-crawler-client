import { BasePlayer } from "../../common/types";
import Character from "../Character";
import { PlayerTiles } from "./playerTypes";

function ForestAdventurer({
  position,
  gender,
  direction,
  scale = 1,
  size,
  zIndex,
}: Omit<BasePlayer, "variant" | "tiles">) {
  const tiles: PlayerTiles = {
    female: [
      { x: -128, y: -16, width: 15, height: 16 },
      { x: -144, y: -17, width: 16, height: 15 },
      { x: -160, y: -18, width: 16, height: 14 },
      { x: -176, y: -17, width: 15, height: 15 },
      { x: -192, y: -18, width: 15, height: 14 },
      { x: -208, y: -15, width: 15, height: 17 },
      { x: -224, y: -16, width: 16, height: 16 },
      { x: -240, y: -19, width: 16, height: 13 },
      { x: -256, y: -11, width: 15, height: 18 },
    ],
    male: [
      { x: -129, y: -45, width: 15, height: 19 },
      { x: -145, y: -46, width: 15, height: 18 },
      { x: -161, y: -47, width: 15, height: 17 },
      { x: -177, y: -46, width: 15, height: 18 },
      { x: -193, y: -45, width: 15, height: 19 },
      { x: -209, y: -43, width: 15, height: 19 },
      { x: -225, y: -45, width: 15, height: 18 },
      { x: -241, y: -46, width: 15, height: 18 },
      { x: -257, y: -41, width: 15, height: 19 },
    ],
  };

  return (
    <Character
      direction={direction}
      size={size}
      tiles={tiles[gender]}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default ForestAdventurer;
