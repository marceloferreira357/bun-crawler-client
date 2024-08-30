import { BaseMapTile, Tile } from "../../common/types";
import AnimatedMapTile from "./AnimatedMapTile";

function WallFountainBasinBlue({
  position,
  scale,
  zIndex,
}: Omit<BaseMapTile, "variant">) {
  const tiles: Tile[] = [
    { x: -64, y: -64, width: 16, height: 16 },
    { x: -80, y: -64, width: 16, height: 16 },
    { x: -96, y: -64, width: 16, height: 16 },
  ];

  return (
    <AnimatedMapTile
      tiles={tiles}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default WallFountainBasinBlue;
