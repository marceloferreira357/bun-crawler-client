import { BasePlayer } from "../../common/types";
import Character from "../Character";
import { PlayerTiles } from "./playerTypes";

function EmberChampion({
  position,
  gender,
  direction,
  scale = 1,
  size,
  zIndex,
}: Omit<BasePlayer, "variant" | "tiles">) {
  const tiles: PlayerTiles = {
    female: [
      { x: -130, y: -267, width: 14, height: 21 },
      { x: -146, y: -267, width: 14, height: 21 },
      { x: -162, y: -268, width: 14, height: 20 },
      { x: -178, y: -271, width: 14, height: 17 },
      { x: -193, y: -266, width: 14, height: 22 },
      { x: -209, y: -264, width: 14, height: 22 },
      { x: -225, y: -265, width: 14, height: 22 },
      { x: -241, y: -267, width: 14, height: 21 },
      { x: -257, y: -263, width: 15, height: 20 },
    ],
    male: [
      { x: -130, y: -299, width: 14, height: 21 },
      { x: -146, y: -299, width: 14, height: 21 },
      { x: -162, y: -300, width: 14, height: 20 },
      { x: -178, y: -303, width: 14, height: 17 },
      { x: -193, y: -298, width: 14, height: 22 },
      { x: -209, y: -296, width: 14, height: 22 },
      { x: -225, y: -297, width: 14, height: 22 },
      { x: -241, y: -299, width: 14, height: 21 },
      { x: -257, y: -295, width: 15, height: 20 },
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

export default EmberChampion;
