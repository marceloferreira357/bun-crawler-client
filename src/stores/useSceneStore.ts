import { create } from "zustand";
import { ScenePlayer, SceneVariant } from "../common/types";

const useSceneStore = create<{
  scene: SceneVariant;
  players: ScenePlayer[];
  setScene: (scene: SceneVariant) => void;
  setPlayers: (players: ScenePlayer[]) => void;
}>((set) => ({
  scene: "lobby",
  players: [],
  setScene: (scene: SceneVariant) => set((state) => ({ ...state, scene })),
  setPlayers: (players: ScenePlayer[]) =>
    set((state) => ({ ...state, players })),
}));

export default useSceneStore;
