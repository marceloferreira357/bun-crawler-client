import { useShallow } from "zustand/react/shallow";
import useConnectionStore from "../../stores/useConnectionStore";
import Background from "./Background";
import { getConnectionStatusMessage } from "./connectionStatusUtils";

function ConnectionStatus() {
  const { connectionStatus } = useConnectionStore(useShallow((state) => state));

  return (
    <div style={{ position: "relative" }}>
      <Background />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100dvw",
          height: "100dvh",
          zIndex: 1,
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "2rem",
            textShadow: "2px 4px 3px rgba(0, 0, 0, 0.3)",
          }}
        >
          {getConnectionStatusMessage(connectionStatus)}
        </span>
      </div>
    </div>
  );
}

export default ConnectionStatus;
