import { BaseMap, GridMap } from "../../common/types";
import { getPositionsMap } from "../../common/utils";
import lobby from "../../maps/lobby.json";
import MapTile from "../MapTile/MapTile";

function Lobby({ relativePositions }: Omit<BaseMap, "variant">) {
  const { tiles } = lobby as GridMap;

  const relativeGridMapTilesPositionsMap = getPositionsMap(relativePositions);

  return tiles.map(({ variant, zIndex }, index) => {
    const relativePosition = relativeGridMapTilesPositionsMap.get(
      String(index)
    );

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
