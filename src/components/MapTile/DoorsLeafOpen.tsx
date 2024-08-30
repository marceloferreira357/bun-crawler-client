import { BaseMapTile } from "../../common/types";
import StaticMapTile from "./StaticMapTile";

function DoorsLeafOpen({
  position,
  scale,
  zIndex,
}: Omit<BaseMapTile, "variant">) {
  return (
    <StaticMapTile
      tile={{ x: -80, y: -240, width: 32, height: 32 }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default DoorsLeafOpen;
