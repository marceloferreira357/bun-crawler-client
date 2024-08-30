import { BaseMapTile } from "../../common/types";
import StaticMapTile from "./StaticMapTile";

function WallRight({ position, scale, zIndex }: Omit<BaseMapTile, "variant">) {
  return (
    <StaticMapTile
      tile={{ x: -48, y: -16, width: 16, height: 16 }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default WallRight;
