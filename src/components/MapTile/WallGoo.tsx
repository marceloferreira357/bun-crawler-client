import { BaseMapTile } from "../../common/types";
import StaticMapTile from "./StaticMapTile";

function WallGoo({ position, scale, zIndex }: Omit<BaseMapTile, "variant">) {
  return (
    <StaticMapTile
      tile={{ x: -64, y: -80, width: 16, height: 16 }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default WallGoo;
