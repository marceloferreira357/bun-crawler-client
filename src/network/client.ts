import { Socket } from "socket.io-client";

export const clientConnect = (socket: Socket) => {
  if (socket.disconnected) {
    socket.connect();
  }
};

export const clientDisconnect = (socket: Socket) => {
  if (socket.connected) {
    socket.disconnect();
  }
};

export const clientEmit = (socket: Socket, event: string, args: any[] = []) => {
  socket.emit(event, ...args);
};
