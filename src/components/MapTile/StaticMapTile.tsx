import { BaseMapTile, Tile } from "../../common/types";
import SpriteSheet from "../SpriteSheet";

type StaticMapTileProps = {
  tile: Tile;
} & Omit<BaseMapTile, "variant">;

function StaticMapTile({ position, scale, zIndex, tile }: StaticMapTileProps) {
  return (
    <SpriteSheet
      src={
        new URL(
          "/sprites/0x72_DungeonTilesetII_v1.7/0x72_DungeonTilesetII_v1.7.png",
          import.meta.env.VITE_PUBLIC_ADDRESS
        )
      }
      position={position}
      scale={scale}
      size={{
        width: 512,
        height: 512,
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
      zIndex={zIndex}
    />
  );
}

export default StaticMapTile;
