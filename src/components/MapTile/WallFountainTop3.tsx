import { BaseMapTile } from "../../common/types";
import StaticMapTile from "./StaticMapTile";

function WallFountainTop3({
  position,
  scale,
  zIndex,
}: Omit<BaseMapTile, "variant">) {
  return (
    <StaticMapTile
      tile={{ x: -96, y: 0, width: 16, height: 16 }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default WallFountainTop3;
