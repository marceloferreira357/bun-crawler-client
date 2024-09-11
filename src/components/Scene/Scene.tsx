import { SceneVariant } from "../../common/types";
import Lobby from "./Lobby";

type SceneProps = {
  variant: SceneVariant;
};

function Scene({ variant }: SceneProps) {
  switch (variant) {
    case "lobby":
      return <Lobby />;
    default:
      throw new Error("Scene variant doesn't exist");
  }
}

export default Scene;
