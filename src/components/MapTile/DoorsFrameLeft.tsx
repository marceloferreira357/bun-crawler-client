import { BaseMapTile } from "../../common/types";
import StaticMapTile from "./StaticMapTile";

function DoorsFrameLeft({
  position,
  scale,
  zIndex,
}: Omit<BaseMapTile, "variant">) {
  return (
    <StaticMapTile
      tile={{ x: -16, y: -240, width: 16, height: 32 }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default DoorsFrameLeft;
