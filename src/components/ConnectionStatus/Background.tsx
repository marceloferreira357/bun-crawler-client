import { useWindowSize } from "@uidotdev/usehooks";
import React, { useMemo } from "react";
import { MapTileVariant } from "../../common/types";
import MapTile from "../MapTile/MapTile";
import { generateTileGrid } from "./connectionStatusUtils";

function Background() {
  const { width, height } = useWindowSize();

  const tileSize = 16 * 3;
  const columns = Math.ceil(width! / tileSize);
  const rows = Math.ceil(height! / tileSize);

  const tileGrid = useMemo(
    () => generateTileGrid(rows, columns),
    [columns, rows]
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, ${tileSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${tileSize}px)`,
      }}
    >
      {tileGrid.flatMap((row, rowIndex) =>
        row.map((variant, colIndex) => (
          <MapTile
            key={`${rowIndex}-${colIndex}`}
            variant={variant as MapTileVariant}
            position={{ x: colIndex * tileSize, y: rowIndex * tileSize }}
            scale={3}
            zIndex={0}
          />
        ))
      )}
    </div>
  );
}

export default React.memo(Background);
