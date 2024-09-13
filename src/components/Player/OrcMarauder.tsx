import { BasePlayer } from "../../common/types";
import Character from "../Character/Character";
import { PlayerTiles } from "./playerTypes";

function OrcMarauder({
  position,
  gender,
  direction,
  scale = 1,
  size,
  zIndex,
  isMoving,
  name,
}: Omit<BasePlayer, "variant" | "tiles">) {
  const tiles: PlayerTiles = {
    female: [
      { x: -129, y: -205, width: 15, height: 19 },
      { x: -145, y: -205, width: 15, height: 19 },
      { x: -160, y: -208, width: 16, height: 16 },
      { x: -177, y: -206, width: 15, height: 18 },
      { x: -193, y: -205, width: 15, height: 19 },
      { x: -209, y: -203, width: 15, height: 19 },
      { x: -225, y: -204, width: 15, height: 19 },
      { x: -241, y: -207, width: 15, height: 17 },
      { x: -257, y: -203, width: 15, height: 19 },
    ],
    male: [
      { x: -130, y: -237, width: 15, height: 19 },
      { x: -145, y: -237, width: 15, height: 19 },
      { x: -160, y: -240, width: 16, height: 16 },
      { x: -177, y: -238, width: 15, height: 18 },
      { x: -193, y: -237, width: 15, height: 19 },
      { x: -209, y: -235, width: 15, height: 19 },
      { x: -226, y: -236, width: 15, height: 19 },
      { x: -241, y: -239, width: 15, height: 17 },
      { x: -257, y: -234, width: 15, height: 17 },
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
      isMoving={isMoving}
      name={name}
    />
  );
}

export default OrcMarauder;
