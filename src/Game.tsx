import { useRef } from "react";
import { useShallow } from "zustand/react/shallow";
import AnimatedScene from "./components/AnimatedScene";
import DebugCard from "./components/DebugCard";
import GameWrapper from "./components/GameWrapper";
import useAnimationFrame from "./hooks/useAnimationFrame";
import useWebSocket from "./hooks/useWebSocket";
import { clientEmit } from "./network/client";
import useConnectionStore from "./stores/useConnectionStore";
import useGameStore from "./stores/useGameStore";

function Game() {
  const { socket } = useConnectionStore(useShallow((state) => state));
  const { deltaTime } = useGameStore(useShallow((state) => state));

  useAnimationFrame();
  useWebSocket();

  const pingAccumulator = useRef(0);
  const pingInterval = useRef(1000);

  const update = () => {
    pingAccumulator.current += deltaTime;
    if (pingAccumulator.current >= pingInterval.current) {
      clientEmit(socket, "ping", [Date.now()]);
      pingAccumulator.current = 0;
    }
  };

  return (
    <AnimatedScene update={update}>
      <GameWrapper>
        <DebugCard position={{ x: 8, y: 8 }} />
      </GameWrapper>
    </AnimatedScene>
  );
}

export default Game;
