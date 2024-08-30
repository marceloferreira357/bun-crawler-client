import { BaseMapTile } from "../../common/types";
import StaticMapTile from "./StaticMapTile";

function WallTopMid({ position, scale, zIndex }: Omit<BaseMapTile, "variant">) {
  return (
    <StaticMapTile
      tile={{ x: -32, y: 0, width: 16, height: 16 }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default WallTopMid;
