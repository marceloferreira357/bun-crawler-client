import { BaseMapTile } from "../../common/types";
import StaticMapTile from "./StaticMapTile";

function ColumnWall({ position, scale, zIndex }: Omit<BaseMapTile, "variant">) {
  return (
    <StaticMapTile
      tile={{ x: -96, y: -80, width: 16, height: 48 }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default ColumnWall;
