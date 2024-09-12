import { ConnectionStatus } from "../../common/types";

export const getConnectionStatusMessage = (
  connectionStatus: ConnectionStatus
) => {
  switch (connectionStatus) {
    case "connecting":
      return `Connecting to the server ${import.meta.env.VITE_SERVER_ADDRESS}`;
    case "disconnected":
      return "Disconnected from the server";
    case "connection_lost":
      return "Connection lost";
    case "server_full":
      return "Disconnected from the server, server is full";
    default:
      return "Server is unreachable";
  }
};
