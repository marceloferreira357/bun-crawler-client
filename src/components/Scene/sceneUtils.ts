import { Socket } from "socket.io-client";
import { PlayerMessage } from "../../common/types";

export const getLastPlayerMessage = (
  playerMessages: PlayerMessage[],
  socket: Socket
): string | undefined => {
  for (let i = playerMessages.length - 1; i >= 0; i--) {
    const playerMessage = playerMessages[i];
    if (playerMessage.socketId === socket.id) {
      return playerMessage.message;
    }
  }
};
