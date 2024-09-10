import { useRef } from "react";
import { useShallow } from "zustand/react/shallow";
import { BaseCharacter } from "../common/types";
import useKeyPress from "../hooks/useKeyPress";
import useGameStore from "../stores/useGameStore";
import SpriteSheet from "./SpriteSheet";

function Character({
  position,
  direction,
  scale = 1,
  size,
  tiles,
}: BaseCharacter) {
  const { deltaTime } = useGameStore(useShallow((state) => state));

  const tileIndex = useRef(0);
  const tileFlip = useRef(false);
  const animationTime = useRef(0);

  const pressedKeys = useKeyPress();

  const animationInterval = useRef(180);
  const update = () => {
    if (direction === "left") {
      tileFlip.current = true;
    } else if (direction === "right") {
      tileFlip.current = false;
    }

    const movementKeys = ["w", "W", "a", "A", "s", "S", "d", "D"];
    const isMoving = pressedKeys.some((key) => movementKeys.includes(key));

    if (isMoving) {
      if (tileIndex.current < 4 || tileIndex.current > 8) {
        tileIndex.current = 4;
      }

      animationTime.current += deltaTime;

      if (animationTime.current >= animationInterval.current) {
        animationTime.current = 0;
        tileIndex.current = tileIndex.current + 1;
        if (tileIndex.current > 8) {
          tileIndex.current = 4;
        }
      }
    } else {
      if (tileIndex.current < 0 || tileIndex.current > 3) {
        tileIndex.current = 0;
      }

      animationTime.current += deltaTime;

      if (animationTime.current >= animationInterval.current) {
        animationTime.current = 0;
        tileIndex.current = (tileIndex.current + 1) % 4;
      }
    }
  };
  update();

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        alignItems: "end",
        top: position?.y,
        left: position?.x,
        width: size.width * scale,
        height: size.height * scale,
        transform: tileFlip.current ? "scaleX(-1)" : "none",
      }}
    >
      <div
        style={{
          width: tiles[tileIndex.current].width * scale,
          height: tiles[tileIndex.current].height * scale,
        }}
      >
        <SpriteSheet
          src={
            new URL(
              "/sprites/0x72_DungeonTilesetII_v1.7/0x72_DungeonTilesetII_v1.7.png",
              import.meta.env.VITE_PUBLIC_ADDRESS
            )
          }
          scale={scale}
          size={{
            width: 512,
            height: 512,
          }}
          tile={{
            position: {
              x: tiles[tileIndex.current].x,
              y: tiles[tileIndex.current].y,
            },
            size: {
              width: tiles[tileIndex.current].width,
              height: tiles[tileIndex.current].height,
            },
          }}
        />
      </div>
    </div>
  );
}

export default Character;
