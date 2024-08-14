import { ZIndex } from "../common/constants";
import { Vector2 } from "../common/types";
import { fixDecimalPlaces } from "../common/utils";
import useGameStore from "../stores/useGameStore";
import Text from "./Text";

type DebugCardProps = {
  position: Vector2;
};

function DebugCard({ position }: DebugCardProps) {
  const { fps, deltaTime } = useGameStore();

  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        display: "flex",
        flexDirection: "column",
        zIndex: ZIndex.debugCard,
      }}
    >
      <Text fontSize={"1.5rem"}>fps: {fps}</Text>
      <Text fontSize={"1.5rem"}>
        deltaTime: {fixDecimalPlaces(deltaTime, 2)}
      </Text>
    </div>
  );
}

export default DebugCard;
