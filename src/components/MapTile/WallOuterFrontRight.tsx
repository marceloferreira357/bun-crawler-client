import { BaseMapTile } from "../../common/types";
import StaticMapTile from "./StaticMapTile";

function WallOuterFrontRight({
  position,
  scale,
  zIndex,
}: Omit<BaseMapTile, "variant">) {
  return (
    <StaticMapTile
      tile={{ x: -16, y: -168, width: 16, height: 16 }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default WallOuterFrontRight;
