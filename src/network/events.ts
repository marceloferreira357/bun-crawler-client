import { Socket } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import {
  ConnectionStatus,
  Events,
  PlayerEvent,
  ScenePlayer,
  SceneVariant,
} from "../common/types";

export const handleOnConnectEvent = (
  socket: Socket,
  setConnectionStatus: (connectionStatus: ConnectionStatus) => void
) => {
  socket.on(Events.CONNECT, () => {
    setConnectionStatus("connected");
  });
};

export const handleOnConnectErrorEvent = (
  socket: Socket,
  setConnectionStatus: (connectionStatus: ConnectionStatus) => void
) => {
  socket.on(Events.CONNECT_ERROR, (reason: Error) => {
    console.log("Error on connect reason: ", reason);
    setConnectionStatus("connection_error");
  });
};

export const handleOnDisconnectEvent = (
  socket: Socket,
  setConnectionStatus: (connectionStatus: ConnectionStatus) => void
) => {
  socket.on(Events.DISCONNECT, (reason: Socket.DisconnectReason) => {
    console.log("Disconnected reason:", reason);
    setConnectionStatus("connection_lost");
  });
};

export const handleOnServerFullEvent = (
  socket: Socket,
  setConnectionStatus: (connectionStatus: ConnectionStatus) => void
) => {
  socket.on(Events.SERVER_FULL, () => {
    socket.disconnect();
    setConnectionStatus("server_full");
  });
};

export const handleOnPongEvent = (
  socket: Socket,
  setPing: (ping: number) => void
) => {
  socket.on(Events.PONG, (...args: any[]) => {
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
  socket.on(Events.UPDATE_SCENE, (...args: any[]) => {
    setScene(args[0]);
    setPlayers(args[1]);
  });
};

export const handleOnPlayerConnectedEvent = (
  socket: Socket,
  addPlayerEvent: (playerEvent: PlayerEvent) => void
) => {
  socket.on(Events.PLAYER_CONNECTED, (...args: any[]) => {
    addPlayerEvent({
      id: uuidv4(),
      socketId: args[0],
      event: Events.PLAYER_CONNECTED,
    });
  });
};

export const handleOnPlayerDisconnectedEvent = (
  socket: Socket,
  addPlayerEvent: (playerEvent: PlayerEvent) => void
) => {
  socket.on(Events.PLAYER_DISCONNECTED, (...args: any[]) => {
    addPlayerEvent({
      id: uuidv4(),
      socketId: args[0],
      event: Events.PLAYER_DISCONNECTED,
    });
  });
};
