import { io, Socket } from "socket.io-client";
import { create } from "zustand";
import { ConnectionStatus } from "../common/types";

const useConnectionStore = create<{
  ping: number;
  socket: Socket;
  connectionStatus: ConnectionStatus;
  setPing: (ping: number) => void;
  setConnectionStatus: (connectionStatus: ConnectionStatus) => void;
}>((set) => ({
  ping: 0,
  socket: io(import.meta.env.VITE_SERVER_ADDRESS, {
    autoConnect: false,
    reconnection: false,
  }),
  connectionStatus: "connecting",
  setPing: (ping: number) => set((state) => ({ ...state, ping })),
  setConnectionStatus: (connectionStatus: ConnectionStatus) =>
    set((state) => ({ ...state, connectionStatus })),
}));

export default useConnectionStore;
