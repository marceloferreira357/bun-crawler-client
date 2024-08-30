import { BaseMapTile } from "../../common/types";
import StaticMapTile from "./StaticMapTile";

function FloorStairs({
  position,
  scale,
  zIndex,
}: Omit<BaseMapTile, "variant">) {
  return (
    <StaticMapTile
      tile={{ x: -80, y: -192, width: 16, height: 16 }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default FloorStairs;
