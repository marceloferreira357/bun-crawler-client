import { create } from "zustand";

const useSettingsStore = create<{
  maxFps: number;
  setMaxFps: (maxFps: number) => void;
}>((set) => ({
  maxFps: 60,
  setMaxFps: (maxFps: number) => set((state) => ({ ...state, maxFps })),
}));

export default useSettingsStore;
