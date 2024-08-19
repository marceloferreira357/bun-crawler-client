import { forwardRef } from "react";
import { Entity } from "../common/types";
import GameObject from "./GameObject";
import Sprite from "./Sprite";

type SpriteSheetProps = {
  src: URL;
  tile: Pick<Entity, "position" | "size">;
} & Entity &
  Pick<React.CSSProperties, "scale">;

const SpriteSheet = forwardRef<HTMLDivElement, SpriteSheetProps>(
  ({ position, size, zIndex, src, scale, tile }, ref) => {
    return (
      <div
        style={{
          position: "absolute",
          top: position?.y,
          left: position?.x,
          width: tile.size?.width,
          height: tile.size?.height,
          overflow: "hidden",
          transform: scale ? `scale(${scale})` : undefined,
          transformOrigin: "top left",
        }}
      >
        <GameObject ref={ref} size={tile.size} zIndex={zIndex}>
          <Sprite position={tile.position} size={size} src={src} />
        </GameObject>
      </div>
    );
  }
);

export default SpriteSheet;
