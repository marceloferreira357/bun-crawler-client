import { BaseMapTile } from "../../common/types";
import StaticMapTile from "./StaticMapTile";

function DoorsFrameTop({
  position,
  scale,
  zIndex,
}: Omit<BaseMapTile, "variant">) {
  return (
    <StaticMapTile
      tile={{ x: -32, y: -224, width: 32, height: 16 }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default DoorsFrameTop;
