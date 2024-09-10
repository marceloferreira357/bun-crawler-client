import { BaseMap, GridMap } from "../../common/types";
import lobby from "../../maps/lobby.json";
import MapTile from "../MapTile/MapTile";
import { getRelativeGridMapTilesPositionsMap } from "./mapUtils";

function Lobby({ relativePositions }: Omit<BaseMap, "variant">) {
  const { tiles } = lobby as GridMap;

  const relativeGridMapTilesPositionsMap =
    getRelativeGridMapTilesPositionsMap(relativePositions);

  return tiles.map(({ variant, zIndex }, index) => {
    const relativePosition = relativeGridMapTilesPositionsMap.get(index);

    return (
      <MapTile
        key={index}
        variant={variant}
        position={relativePosition}
        scale={3}
        zIndex={zIndex}
      />
    );
  });
}

export default Lobby;
