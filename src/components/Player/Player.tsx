import { BasePlayer } from "../../common/types";
import ArcaneSage from "./ArcaneSage";
import EmberChampion from "./EmberChampion";
import ForestAdventurer from "./ForestAdventurer";
import InfernoKnight from "./InfernoKnight";
import OrcMarauder from "./OrcMarauder";

function Player({
  position,
  gender,
  direction,
  scale,
  size,
  zIndex,
  variant,
  isMoving,
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
          isMoving={isMoving}
        />
      );
    case "inferno_knight":
      return (
        <InfernoKnight
          position={position}
          gender={gender}
          direction={direction}
          scale={scale}
          size={size}
          zIndex={zIndex}
          isMoving={isMoving}
        />
      );
    case "arcane_sage":
      return (
        <ArcaneSage
          position={position}
          gender={gender}
          direction={direction}
          scale={scale}
          size={size}
          zIndex={zIndex}
          isMoving={isMoving}
        />
      );
    case "orc_marauder":
      return (
        <OrcMarauder
          position={position}
          gender={gender}
          direction={direction}
          scale={scale}
          size={size}
          zIndex={zIndex}
          isMoving={isMoving}
        />
      );
    case "ember_champion":
      return (
        <EmberChampion
          position={position}
          gender={gender}
          direction={direction}
          scale={scale}
          size={size}
          zIndex={zIndex}
          isMoving={isMoving}
        />
      );
    default:
      throw new Error("Player variant doesn't exist");
  }
}

export default Player;