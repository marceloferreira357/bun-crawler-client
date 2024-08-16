import { io, Socket } from "socket.io-client";
import { create } from "zustand";

const useConnectionStore = create<{
  ping: number;
  socket: Socket;
  setPing: (ping: number) => void;
}>((set) => ({
  ping: 0,
  socket: io(import.meta.env.VITE_SERVER_ADDRESS, {
    autoConnect: false,
    reconnection: false,
  }),
  setPing: (ping: number) => set((state) => ({ ...state, ping })),
}));

export default useConnectionStore;
