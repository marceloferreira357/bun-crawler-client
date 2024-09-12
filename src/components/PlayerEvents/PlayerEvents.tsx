import { useEffect, useRef } from "react";
import { useShallow } from "zustand/react/shallow";
import { zIndex } from "../../common/constants";
import { Events } from "../../common/types";
import useGameStore from "../../stores/useGameStore";
import useSceneStore from "../../stores/useSceneStore";
import Text from "../Text";
import {
  addPlayerEventAccumulator,
  updatePlayerEventAccumulator,
  updatePlayersEvents,
} from "./playerEventsUtils";

function PlayerEvents() {
  const { deltaTime } = useGameStore(useShallow((state) => state));
  const { playerEvents, setPlayerEvents } = useSceneStore(
    useShallow((state) => state)
  );

  const dismissAccumulatorInterval = useRef(5000);
  const playerEventsAccumulators = useRef(
    playerEvents.map((playerEvent) => ({
      id: playerEvent.id,
      dismissAccumulator: 0,
    }))
  );

  const update = () => {
    addPlayerEventAccumulator(playerEvents, playerEventsAccumulators.current);

    updatePlayerEventAccumulator(
      playerEventsAccumulators.current,
      dismissAccumulatorInterval.current,
      deltaTime
    );
  };
  update();

  useEffect(() => {
    updatePlayersEvents(
      playerEvents,
      playerEventsAccumulators.current,
      dismissAccumulatorInterval.current,
      setPlayerEvents
    );
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 8,
        right: 8,
        display: "flex",
        flexDirection: "column",
        zIndex: zIndex.playerEvents,
        padding: "8px",
        gap: "4px",
      }}
    >
      {playerEvents.map((playerEvent) => (
        <div
          key={playerEvent.id}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "4px 12px 4px 12px",
            borderRadius: "8px",
          }}
        >
          <Text
            fontSize={"1.5rem"}
            color={
              playerEvent.event === Events.PLAYER_CONNECTED ? "green" : "orange"
            }
          >
            {playerEvent.event === Events.PLAYER_CONNECTED
              ? `Player ${playerEvent.socketId} connected`
              : `Player ${playerEvent.socketId} disconnected`}
          </Text>
        </div>
      ))}
    </div>
  );
}

export default PlayerEvents;
