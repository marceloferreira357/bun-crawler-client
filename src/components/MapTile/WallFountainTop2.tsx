import { BaseMapTile } from "../../common/types";
import StaticMapTile from "./StaticMapTile";

function WallFountainTop2({
  position,
  scale,
  zIndex,
}: Omit<BaseMapTile, "variant">) {
  return (
    <StaticMapTile
      tile={{ x: -80, y: 0, width: 16, height: 16 }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default WallFountainTop2;
