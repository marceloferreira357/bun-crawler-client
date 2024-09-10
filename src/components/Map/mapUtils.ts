import { GridMapTileRelativePosition, Vector2 } from "../../common/types";

export const getRelativeGridMapTilesPositionsMap = (
  relativePositions: GridMapTileRelativePosition[]
) => {
  return new Map<number, Vector2 | undefined>(
    relativePositions.map(({ index, position }) => [index, position])
  );
};
