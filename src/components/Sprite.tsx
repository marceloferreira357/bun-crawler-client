import { Entity } from "../common/types";
import GameObject from "./GameObject";

type SpriteProps = {
  src: URL;
} & Entity;

function Sprite({ position, size, src, scale, zIndex }: SpriteProps) {
  return (
    <GameObject position={position} size={size} scale={scale} zIndex={zIndex}>
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

export default Sprite;
