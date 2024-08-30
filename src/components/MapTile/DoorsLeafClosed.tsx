import { BaseMapTile } from "../../common/types";
import StaticMapTile from "./StaticMapTile";

function DoorsLeafClosed({
  position,
  scale,
  zIndex,
}: Omit<BaseMapTile, "variant">) {
  return (
    <StaticMapTile
      tile={{ x: -32, y: -240, width: 32, height: 32 }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default DoorsLeafClosed;
