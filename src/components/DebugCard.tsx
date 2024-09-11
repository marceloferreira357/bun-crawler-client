import { useShallow } from "zustand/react/shallow";
import { zIndex } from "../common/constants";
import { fixDecimalPlaces } from "../common/utils";
import useCursorPosition from "../hooks/useCursorPosition";
import useConnectionStore from "../stores/useConnectionStore";
import useGameStore from "../stores/useGameStore";
import useSceneStore from "../stores/useSceneStore";
import Text from "./Text";

function DebugCard() {
  const { x = 0, y = 0 } = useCursorPosition();
  const { fps, deltaTime } = useGameStore(useShallow((state) => state));
  const { socket, connectionStatus, ping } = useConnectionStore(
    useShallow((state) => state)
  );
  const { scene, players } = useSceneStore(useShallow((state) => state));

  return (
    <div
      style={{
        position: "absolute",
        top: 8,
        left: 8,
        display: "flex",
        flexDirection: "column",
        zIndex: zIndex.debugCard,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "8px",
        borderRadius: "8px",
        minWidth: "260px",
      }}
    >
      <div
        style={{
          marginBottom: "8px",
          fontWeight: "bold",
        }}
      >
        <Text fontSize={"1.5rem"}>Bun Crawler Debug</Text>
      </div>
      <Text fontSize={"1.5rem"}>
        fps:{" "}
        <Text
          fontSize={"1.5rem"}
          color={fps >= 30 && fps < 60 ? "orange" : fps >= 60 ? "green" : "red"}
        >
          {fps}
        </Text>
      </Text>
      <Text fontSize={"1.5rem"}>
        deltaTime: {fixDecimalPlaces(deltaTime, 2)}ms
      </Text>
      <Text fontSize={"1.5rem"}>
        connected:{" "}
        <Text
          fontSize={"1.5rem"}
          color={connectionStatus === "connected" ? "green" : "red"}
        >
          {connectionStatus === "connected" ? "true" : "false"}
        </Text>
      </Text>
      {connectionStatus === "connected" && (
        <>
          <Text fontSize={"1.5rem"}>
            ping:{" "}
            <Text
              fontSize={"1.5rem"}
              color={
                ping > 150
                  ? "red"
                  : ping >= 50 && ping <= 150
                    ? "orange"
                    : "green"
              }
            >
              {ping}
            </Text>
          </Text>
          <Text fontSize={"1.5rem"}>socket id: {socket.id}</Text>
        </>
      )}
      <Text fontSize={"1.5rem"}>
        cursor position: ({x}, {y})
      </Text>
      <Text fontSize={"1.5rem"}>scene: {scene}</Text>
      <Text fontSize={"1.5rem"}>connected players: {players?.length}</Text>
    </div>
  );
}

export default DebugCard;
