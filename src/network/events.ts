import { Socket } from "socket.io-client";

export const handleOnConnectEvent = (socket: Socket) => {
  socket.on("connect", () => {
    console.log("Connected");
  });
};

export const handleOnConnectErrorEvent = (socket: Socket) => {
  socket.on("connect_error", (reason: Error) => {
    console.log("Error on connect reason: ", reason);
  });
};

export const handleOnDisconnectEvent = (socket: Socket) => {
  socket.on("disconnect", (reason: Socket.DisconnectReason) => {
    console.log("Disconnected reason:", reason);
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
