import { useShallow } from "zustand/react/shallow";
import { ZIndex } from "../common/constants";
import { fixDecimalPlaces } from "../common/utils";
import useConnectionStore from "../stores/useConnectionStore";
import useGameStore from "../stores/useGameStore";
import Text from "./Text";

function DebugCard() {
  const { fps, deltaTime } = useGameStore(useShallow((state) => state));
  const { socket, ping } = useConnectionStore(useShallow((state) => state));

  return (
    <div
      style={{
        position: "absolute",
        top: 8,
        left: 8,
        display: "flex",
        flexDirection: "column",
        zIndex: ZIndex.debugCard,
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
        <Text fontSize={"1.5rem"} color={socket.connected ? "green" : "red"}>
          {socket.connected ? "true" : "false"}
        </Text>
      </Text>
      {socket.connected && (
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
    </div>
  );
}

export default DebugCard;
