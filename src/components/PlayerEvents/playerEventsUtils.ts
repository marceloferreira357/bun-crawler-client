import { PlayerEvent } from "../../common/types";
import { PlayerEventAccumulator } from "./playerEventsTypes";

export const addPlayerEventAccumulator = (
  playerEvents: PlayerEvent[],
  playerEventsAccumulators: PlayerEventAccumulator[]
) => {
  const accumulatorMap = new Map(
    playerEventsAccumulators.map((accumulator) => [accumulator.id, accumulator])
  );

  playerEvents.forEach((playerEvent) => {
    if (!accumulatorMap.has(playerEvent.id)) {
      accumulatorMap.set(playerEvent.id, {
        id: playerEvent.id,
        dismissAccumulator: 0,
      });
    }
  });

  playerEventsAccumulators.length = 0;
  playerEventsAccumulators.push(...Array.from(accumulatorMap.values()));
};

export const updatePlayerEventAccumulator = (
  playerEventsAccumulators: PlayerEventAccumulator[],
  dismissAccumulatorInterval: number,
  deltaTime: number
) => {
  const accumulatorMap = new Map(
    playerEventsAccumulators.map((accumulator) => [accumulator.id, accumulator])
  );

  accumulatorMap.forEach((accumulator) => {
    if (accumulator.dismissAccumulator < dismissAccumulatorInterval) {
      accumulator.dismissAccumulator += deltaTime;
    }
  });

  playerEventsAccumulators.length = 0;
  playerEventsAccumulators.push(...Array.from(accumulatorMap.values()));
};

export const updatePlayersEvents = (
  playerEvents: PlayerEvent[],
  playerEventsAccumulators: PlayerEventAccumulator[],
  dismissAccumulatorInterval: number,
  setPlayerEvents: (playerEvents: PlayerEvent[]) => void
) => {
  const accumulatorMap = new Map(
    playerEventsAccumulators.map((accumulator) => [accumulator.id, accumulator])
  );

  const playerEventsCopy = playerEvents.filter((playerEvent) => {
    const accumulator = accumulatorMap.get(playerEvent.id);
    return (
      accumulator && accumulator.dismissAccumulator < dismissAccumulatorInterval
    );
  });

  if (playerEventsCopy.length !== playerEvents.length) {
    setPlayerEvents(playerEventsCopy);
  }
};
