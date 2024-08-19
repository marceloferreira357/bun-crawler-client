import { forwardRef } from "react";
import { Entity } from "../common/types";
import GameObject from "./GameObject";

type SpriteProps = {
  src: URL;
} & Entity;

const Sprite = forwardRef<HTMLDivElement, SpriteProps>(
  ({ position, size, src, scale, zIndex }, ref) => {
    return (
      <GameObject
        ref={ref}
        position={position}
        size={size}
        scale={scale}
        zIndex={zIndex}
      >
        <img
          src={src.href}
          style={{
            width: size?.width,
            height: size?.height,
          }}
        />
      </GameObject>
    );
  }
);

Sprite.displayName = "Sprite";

export default Sprite;
