import { BasePlayer } from "../../common/types";
import Character from "../Character/Character";
import { PlayerTiles } from "./playerTypes";

function InfernoKnight({
  position,
  gender,
  direction,
  scale = 1,
  size,
  zIndex,
  isMoving,
  name,
  message,
}: Omit<BasePlayer, "variant" | "tiles">) {
  const tiles: PlayerTiles = {
    female: [
      { x: -128, y: -76, width: 15, height: 20 },
      { x: -144, y: -76, width: 15, height: 20 },
      { x: -160, y: -76, width: 15, height: 20 },
      { x: -176, y: -77, width: 15, height: 19 },
      { x: -192, y: -75, width: 15, height: 20 },
      { x: -208, y: -74, width: 15, height: 20 },
      { x: -224, y: -74, width: 15, height: 21 },
      { x: -240, y: -74, width: 15, height: 22 },
      { x: -257, y: -69, width: 14, height: 23 },
    ],
    male: [
      { x: -128, y: -108, width: 15, height: 20 },
      { x: -144, y: -108, width: 15, height: 20 },
      { x: -160, y: -108, width: 15, height: 20 },
      { x: -176, y: -109, width: 15, height: 19 },
      { x: -192, y: -107, width: 15, height: 20 },
      { x: -208, y: -106, width: 15, height: 20 },
      { x: -224, y: -106, width: 15, height: 21 },
      { x: -240, y: -106, width: 15, height: 22 },
      { x: -257, y: -101, width: 14, height: 23 },
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
      message={message}
    />
  );
}

export default InfernoKnight;
