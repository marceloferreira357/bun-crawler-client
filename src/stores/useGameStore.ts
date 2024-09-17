import { create } from "zustand";
import { CursorVariant } from "../common/types";

const useGameStore = create<{
  fps: number;
  deltaTime: number;
  cursorVariant: CursorVariant;
  isTyping: boolean;
  setDeltaTime: (deltaTime: number) => void;
  setFps: (fps: number) => void;
  setCursorVariant: (cursorVariant: CursorVariant) => void;
  setIsTyping: (isTyping: boolean) => void;
}>((set) => ({
  fps: 0,
  deltaTime: 0,
  cursorVariant: "triangle1",
  isTyping: false,
  setDeltaTime: (deltaTime: number) =>
    set((state) => ({ ...state, deltaTime })),
  setFps: (fps: number) => set((state) => ({ ...state, fps })),
  setCursorVariant: (cursorVariant: CursorVariant) =>
    set((state) => ({ ...state, cursorVariant })),
  setIsTyping: (isTyping: boolean) => set((state) => ({ ...state, isTyping })),
}));

export default useGameStore;
