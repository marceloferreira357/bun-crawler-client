import { BaseMapTile } from "../../common/types";
import StaticMapTile from "./StaticMapTile";

function ButtonRedDown({
  position,
  scale,
  zIndex,
}: Omit<BaseMapTile, "variant">) {
  return (
    <StaticMapTile
      tile={{ x: -32, y: -208, width: 16, height: 16 }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default ButtonRedDown;
