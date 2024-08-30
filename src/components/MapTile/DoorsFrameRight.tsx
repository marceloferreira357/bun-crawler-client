import { BaseMapTile } from "../../common/types";
import StaticMapTile from "./StaticMapTile";

function DoorsFrameRight({
  position,
  scale,
  zIndex,
}: Omit<BaseMapTile, "variant">) {
  return (
    <StaticMapTile
      tile={{ x: -64, y: -240, width: 16, height: 32 }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default DoorsFrameRight;
