import { BaseMapTile } from "../../common/types";
import StaticMapTile from "./StaticMapTile";

function Column({ position, scale, zIndex }: Omit<BaseMapTile, "variant">) {
  return (
    <StaticMapTile
      tile={{ x: -80, y: -80, width: 16, height: 48 }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default Column;
