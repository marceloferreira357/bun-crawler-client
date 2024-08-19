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
      <GameObject
        ref={ref}
        position={position}
        size={tile.size}
        scale={scale}
        zIndex={zIndex}
      >
        <Sprite position={tile.position} size={size} src={src} />
      </GameObject>
    );
  }
);

export default SpriteSheet;
