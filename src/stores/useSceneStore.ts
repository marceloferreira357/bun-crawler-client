import { create } from "zustand";
import { PlayerEvent, ScenePlayer, SceneVariant } from "../common/types";

const useSceneStore = create<{
  scene: SceneVariant;
  players: ScenePlayer[];
  playerEvents: PlayerEvent[];
  setScene: (scene: SceneVariant) => void;
  setPlayers: (players: ScenePlayer[]) => void;
  setPlayerEvents: (playerEvents: PlayerEvent[]) => void;
  addPlayerEvent: (playerEvent: PlayerEvent) => void;
}>((set) => ({
  scene: "lobby",
  players: [],
  playerEvents: [],
  setScene: (scene: SceneVariant) => set((state) => ({ ...state, scene })),
  setPlayers: (players: ScenePlayer[]) =>
    set((state) => ({ ...state, players })),
  setPlayerEvents: (playerEvents: PlayerEvent[]) =>
    set((state) => ({ ...state, playerEvents })),
  addPlayerEvent: (playerEvent: PlayerEvent) =>
    set((state) => {
      const alreadyExists = state.playerEvents.some(
        ({ socketId, event }) =>
          playerEvent.socketId === socketId && playerEvent.event === event
      );

      if (alreadyExists) {
        return { ...state };
      }

      return {
        ...state,
        playerEvents: [...state.playerEvents, playerEvent],
      };
    }),
}));

export default useSceneStore;
