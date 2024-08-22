import { useRef } from "react";
import { useShallow } from "zustand/react/shallow";
import useGameStore from "../../stores/useGameStore";
import SpriteSheet from "../SpriteSheet";
import {
  getActiveKeySpriteSheetTile,
  updateKeySpriteSheetTiles,
} from "./controllerHudUtils";

type DKeySpriteSheetProps = {
  pressedKeys: string[];
};

function DKeySpriteSheet({ pressedKeys }: DKeySpriteSheetProps) {
  const { deltaTime } = useGameStore(useShallow((state) => state));

  const tiles = useRef({
    keyUp: [
      { x: -96, y: -64, active: true, width: 16, height: 16 },
      { x: -96, y: -401, active: false, width: 16, height: 15 },
    ],
    keyDown: [
      { x: -96, y: -177, active: false, width: 16, height: 15 },
      { x: -96, y: -290, active: false, width: 16, height: 14 },
    ],
  });

  const intervalAccumulator = useRef(0);
  updateKeySpriteSheetTiles(
    intervalAccumulator,
    deltaTime,
    pressedKeys,
    tiles,
    ["d", "D"]
  );

  const activeKeySpriteSheetTile = getActiveKeySpriteSheetTile(tiles);

  return (
    <SpriteSheet
      src={
        new URL(
          "/ui/gdb-gamepad-2(all)/gdb-keyboard-2.png",
          import.meta.env.VITE_PUBLIC_ADDRESS
        )
      }
      scale={3}
      size={{
        width: 560,
        height: 640,
      }}
      tile={{
        position: {
          x: activeKeySpriteSheetTile?.x!,
          y: activeKeySpriteSheetTile?.y!,
        },
        size: {
          width: activeKeySpriteSheetTile?.width!,
          height: activeKeySpriteSheetTile?.height!,
        },
      }}
    />
  );
}

export default DKeySpriteSheet;