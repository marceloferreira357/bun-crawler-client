import { useRef } from "react";
import { useShallow } from "zustand/react/shallow";
import DebugCard from "./components/DebugCard";
import Scene from "./components/Scene";
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
    <div style={{ position: "relative" }}>
      <Scene size={{ width: "100dvw", height: "100dvh" }} update={update}>
        <DebugCard position={{ x: 8, y: 8 }} />
      </Scene>
    </div>
  );
}

export default Game;
