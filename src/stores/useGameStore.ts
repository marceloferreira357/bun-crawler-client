import { create } from "zustand";

const useGameStore = create<{
  fps: number;
  deltaTime: number;
  setDeltaTime: (deltaTime: number) => void;
  setFps: (fps: number) => void;
}>((set) => ({
  fps: 0,
  deltaTime: 0,
  setDeltaTime: (deltaTime: number) =>
    set((state) => ({ ...state, deltaTime })),
  setFps: (fps: number) => set((state) => ({ ...state, fps })),
}));

export default useGameStore;
