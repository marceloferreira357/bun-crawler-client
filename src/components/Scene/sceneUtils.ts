import { PlayerMessage } from "../../common/types";

export const getLastPlayerMessage = (
  playerMessages: PlayerMessage[],
  playerId: string
): string | undefined => {
  for (let i = playerMessages.length - 1; i >= 0; i--) {
    const playerMessage = playerMessages[i];
    if (playerMessage.socketId === playerId) {
      return playerMessage.message;
    }
  }
};
