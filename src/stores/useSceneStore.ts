import { create } from "zustand";
import {
  PlayerEvent,
  PlayerMessage,
  ScenePlayer,
  SceneVariant,
} from "../common/types";

const isEventDuplicate = (
  events: PlayerEvent[],
  newEvent: PlayerEvent
): boolean =>
  events.some(
    ({ socketId, event }) =>
      newEvent.socketId === socketId && newEvent.event === event
  );

const isMessageDuplicate = (
  messages: PlayerMessage[],
  newMessage: PlayerMessage
): boolean =>
  messages.some(
    ({ socketId, message }) =>
      newMessage.socketId === socketId && newMessage.message === message
  );

const useSceneStore = create<{
  scene: SceneVariant;
  players: ScenePlayer[];
  playerEvents: PlayerEvent[];
  playerMessages: PlayerMessage[];
  setScene: (scene: SceneVariant) => void;
  setPlayers: (players: ScenePlayer[]) => void;
  setPlayerEvents: (playerEvents: PlayerEvent[]) => void;
  addPlayerEvent: (playerEvent: PlayerEvent) => void;
  setPlayerMessages: (playerMessages: PlayerMessage[]) => void;
  addPlayerMessage: (playerMessage: PlayerMessage) => void;
}>((set) => ({
  scene: "lobby",
  players: [],
  playerEvents: [],
  playerMessages: [],
  setScene: (scene: SceneVariant) => set({ scene }),
  setPlayers: (players: ScenePlayer[]) => set({ players }),
  setPlayerEvents: (playerEvents: PlayerEvent[]) => set({ playerEvents }),
  addPlayerEvent: (playerEvent: PlayerEvent) =>
    set((state) => {
      if (isEventDuplicate(state.playerEvents, playerEvent)) {
        return state;
      }
      return {
        playerEvents: [...state.playerEvents, playerEvent],
      };
    }),
  setPlayerMessages: (playerMessages: PlayerMessage[]) =>
    set({ playerMessages }),
  addPlayerMessage: (playerMessage: PlayerMessage) =>
    set((state) => {
      if (isMessageDuplicate(state.playerMessages, playerMessage)) {
        return state;
      }
      return {
        playerMessages: [...state.playerMessages, playerMessage],
      };
    }),
}));

export default useSceneStore;
