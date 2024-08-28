import { BasePlayer } from "../../common/types";
import ForestAdventurer from "./ForestAdventurer";

function Player({
  position,
  gender,
  direction,
  scale,
  size,
  zIndex,
  variant,
}: Omit<BasePlayer, "tiles">) {
  switch (variant) {
    case "forest_adventurer":
      return (
        <ForestAdventurer
          position={position}
          gender={gender}
          direction={direction}
          scale={scale}
          size={size}
          zIndex={zIndex}
        />
      );
    default:
      throw new Error("Player variant doesn't exist");
  }
}

export default Player;
