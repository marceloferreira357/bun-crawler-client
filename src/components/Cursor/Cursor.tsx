import { useShallow } from "zustand/react/shallow";
import { zIndex } from "../../common/constants";
import useCursorPosition from "../../hooks/useCursorPosition";
import useGameStore from "../../stores/useGameStore";
import SpriteSheet from "../SpriteSheet";
import { getCursorTile } from "./cursorUtils";

function Cursor() {
  const { x = 0, y = 0 } = useCursorPosition();
  const { cursorVariant } = useGameStore(useShallow((state) => state));

  const tile = getCursorTile(cursorVariant);

  return (
    <div
      style={{
        position: "relative",
        top: y,
        left: x,
        width: tile.width,
        height: tile.height,
        zIndex: zIndex.cursor,
        pointerEvents: "none",
      }}
    >
      <SpriteSheet
        src={
          new URL(
            "/ui/Sprout Lands - UI Pack - Basic pack/Sprite sheets/Sprite sheet for Basic Pack.png",
            import.meta.env.VITE_PUBLIC_ADDRESS
          )
        }
        scale={2}
        size={{
          width: 896,
          height: 240,
        }}
        tile={{
          position: {
            x: tile.x,
            y: tile.y,
          },
          size: {
            width: tile.width,
            height: tile.height,
          },
        }}
      />
    </div>
  );
}

export default Cursor;
