import { BaseMapTile } from "../../common/types";
import StaticMapTile from "./StaticMapTile";

function WallBannerYellow({
  position,
  scale,
  zIndex,
}: Omit<BaseMapTile, "variant">) {
  return (
    <StaticMapTile
      tile={{ x: -32, y: -48, width: 16, height: 16 }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default WallBannerYellow;
