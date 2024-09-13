import { BasePlayer } from "../../common/types";
import Character from "../Character/Character";
import { PlayerTiles } from "./playerTypes";

function ArcaneSage({
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
      { x: -128, y: -140, width: 15, height: 20 },
      { x: -144, y: -139, width: 15, height: 21 },
      { x: -160, y: -142, width: 16, height: 18 },
      { x: -176, y: -142, width: 15, height: 18 },
      { x: -192, y: -142, width: 15, height: 18 },
      { x: -208, y: -139, width: 15, height: 21 },
      { x: -224, y: -138, width: 15, height: 22 },
      { x: -239, y: -142, width: 16, height: 18 },
      { x: -256, y: -137, width: 15, height: 21 },
    ],
    male: [
      { x: -130, y: -173, width: 14, height: 19 },
      { x: -146, y: -172, width: 14, height: 20 },
      { x: -161, y: -174, width: 15, height: 18 },
      { x: -178, y: -174, width: 14, height: 18 },
      { x: -193, y: -174, width: 15, height: 18 },
      { x: -210, y: -172, width: 14, height: 20 },
      { x: -225, y: -171, width: 15, height: 21 },
      { x: -240, y: -173, width: 16, height: 19 },
      { x: -256, y: -168, width: 14, height: 21 },
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

export default ArcaneSage;
