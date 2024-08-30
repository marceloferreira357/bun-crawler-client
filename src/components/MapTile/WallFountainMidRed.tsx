import { BaseMapTile, Tile } from "../../common/types";
import AnimatedMapTile from "./AnimatedMapTile";

function WallFountainMidRed({
  position,
  scale,
  zIndex,
}: Omit<BaseMapTile, "variant">) {
  const tiles: Tile[] = [
    { x: -64, y: -16, width: 16, height: 16 },
    { x: -80, y: -16, width: 16, height: 16 },
    { x: -96, y: -16, width: 16, height: 16 },
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

export default WallFountainMidRed;
