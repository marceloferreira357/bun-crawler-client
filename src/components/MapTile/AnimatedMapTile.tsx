import { useRef } from "react";
import { useShallow } from "zustand/react/shallow";
import { BaseMapTile, Tile } from "../../common/types";
import useGameStore from "../../stores/useGameStore";
import StaticMapTile from "./StaticMapTile";

type AnimatedMapTileProps = {
  tiles: Tile[];
} & Omit<BaseMapTile, "variant">;

function AnimatedMapTile({
  position,
  scale,
  zIndex,
  tiles,
}: AnimatedMapTileProps) {
  const { deltaTime } = useGameStore(useShallow((state) => state));

  const tileIndex = useRef(0);
  const animationTime = useRef(0);

  const animationInterval = useRef(300);

  const update = () => {
    animationTime.current += deltaTime;

    if (animationTime.current >= animationInterval.current) {
      animationTime.current = 0;
      tileIndex.current = (tileIndex.current + 1) % tiles.length;
    }
  };
  update();

  return (
    <StaticMapTile
      tile={{
        x: tiles[tileIndex.current].x,
        y: tiles[tileIndex.current].y,
        width: tiles[tileIndex.current].width,
        height: tiles[tileIndex.current].height,
      }}
      position={position}
      scale={scale}
      zIndex={zIndex}
    />
  );
}

export default AnimatedMapTile;
