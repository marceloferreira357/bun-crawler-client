import { useShallow } from "zustand/react/shallow";
import { ZIndex } from "../common/constants";
import { Vector2 } from "../common/types";
import { fixDecimalPlaces } from "../common/utils";
import useConnectionStore from "../stores/useConnectionStore";
import useGameStore from "../stores/useGameStore";
import Text from "./Text";

type DebugCardProps = {
  position: Vector2;
};

function DebugCard({ position }: DebugCardProps) {
  const { fps, deltaTime } = useGameStore(useShallow((state) => state));
  const { ping } = useConnectionStore(useShallow((state) => state));

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
        deltaTime: {fixDecimalPlaces(deltaTime, 2)}ms
      </Text>
      <Text fontSize={"1.5rem"}>ping: {ping}ms</Text>
    </div>
  );
}

export default DebugCard;
