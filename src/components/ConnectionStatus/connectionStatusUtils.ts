import { ConnectionStatus, MapTileVariant } from "../../common/types";

const mapTileVariants: MapTileVariant[] = [
  "floor_1",
  "floor_2",
  "floor_3",
  "floor_4",
  "floor_5",
  "floor_6",
  "floor_7",
  "floor_8",
];

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

export const generateTileGrid = (rows: number, columns: number) => {
  const grid = [];
  for (let row = 0; row < rows; row++) {
    const tilesInRow = [];
    for (let col = 0; col < columns; col++) {
      const randomTile =
        mapTileVariants[Math.floor(Math.random() * mapTileVariants.length)];
      tilesInRow.push(randomTile);
    }
    grid.push(tilesInRow);
  }
  return grid;
};
