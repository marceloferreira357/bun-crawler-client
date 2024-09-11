import { ConnectionStatus } from "../../common/types";

export const getConnectionStatusMessage = (
  connectionStatus: ConnectionStatus
) => {
  switch (connectionStatus) {
    case "connecting":
      return "Connecting to the server";
    case "disconnected":
      return "Disconnected from the server";
    case "connection_lost":
      return "Connection lost";
    default:
      return "Server is unreachable";
  }
};
