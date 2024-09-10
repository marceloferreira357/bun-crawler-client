import { BaseMap } from "../../common/types";
import Lobby from "./Lobby";

function Map({ variant, relativePositions }: BaseMap) {
  switch (variant) {
    case "lobby":
      return <Lobby relativePositions={relativePositions} />;
    default:
      throw new Error("Map variant doesn't exist");
  }
}

export default Map;
