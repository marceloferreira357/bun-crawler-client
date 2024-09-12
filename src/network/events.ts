import { Socket } from "socket.io-client";
import { ConnectionStatus, ScenePlayer, SceneVariant } from "../common/types";

export const handleOnConnectEvent = (
  socket: Socket,
  setConnectionStatus: (connectionStatus: ConnectionStatus) => void
) => {
  socket.on("connect", () => {
    console.log("Connected");
    setConnectionStatus("connected");
  });
};

export const handleOnConnectErrorEvent = (
  socket: Socket,
  setConnectionStatus: (connectionStatus: ConnectionStatus) => void
) => {
  socket.on("connect_error", (reason: Error) => {
    console.log("Error on connect reason: ", reason);
    setConnectionStatus("connection_error");
  });
};

export const handleOnDisconnectEvent = (
  socket: Socket,
  setConnectionStatus: (connectionStatus: ConnectionStatus) => void
) => {
  socket.on("disconnect", (reason: Socket.DisconnectReason) => {
    console.log("Disconnected reason:", reason);
    setConnectionStatus("connection_lost");
  });
};

export const handleOnServerFullEvent = (
  socket: Socket,
  setConnectionStatus: (connectionStatus: ConnectionStatus) => void
) => {
  socket.on("server_full", () => {
    socket.disconnect();
    console.log("Disconnected, server is full");
    setConnectionStatus("disconnected");
  });
};

export const handleOnPongEvent = (
  socket: Socket,
  setPing: (ping: number) => void
) => {
  socket.on("pong", (...args: any[]) => {
    const receivedTimestamp = Date.now();
    const ping = receivedTimestamp - args[0];
    setPing(ping);
  });
};

export const handleOnUpdateSceneEvent = (
  socket: Socket,
  setScene: (scene: SceneVariant) => void,
  setPlayers: (players: ScenePlayer[]) => void
) => {
  socket.on("update_scene", (...args: any[]) => {
    setScene(args[0]);
    setPlayers(args[1]);
  });
};

export const handleOnPlayerConnectedEvent = (socket: Socket) => {
  socket.on("player_connected", (...args: any[]) => {
    console.log("Player connected:", args[0]);
  });
};

export const handleOnPlayerDisconnectedEvent = (socket: Socket) => {
  socket.on("player_disconnected", (...args: any[]) => {
    console.log("Player disconnected:", args[0]);
  });
};
