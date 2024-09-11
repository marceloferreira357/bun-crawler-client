import { useShallow } from "zustand/react/shallow";
import useConnectionStore from "../../stores/useConnectionStore";
import { getConnectionStatusMessage } from "./connectionStatusUtils";

function ConnectionStatus() {
  const { connectionStatus } = useConnectionStore(useShallow((state) => state));

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100dvw",
          height: "100dvh",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "2rem",
          }}
        >
          {getConnectionStatusMessage(connectionStatus)}
        </span>
      </div>
    </div>
  );
}

export default ConnectionStatus;
