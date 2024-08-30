import { BaseMapTile, Tile } from "../../common/types";
import AnimatedMapTile from "./AnimatedMapTile";

function FloorSpikes({
  position,
  scale,
  zIndex,
}: Omit<BaseMapTile, "variant">) {
  const tiles: Tile[] = [
    { x: -16, y: -192, width: 16, height: 16 },
    { x: -32, y: -192, width: 16, height: 16 },
    { x: -48, y: -192, width: 16, height: 16 },
    { x: -64, y: -192, width: 16, height: 16 },
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

export default FloorSpikes;
