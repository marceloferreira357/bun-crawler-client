import { useRef } from "react";
import { useShallow } from "zustand/react/shallow";
import DebugCard from "./components/DebugCard";
import Entity from "./components/Entity";
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
        {/* entities debug */}
        <Entity
          visible
          size={{
            width: 64,
            height: 64,
          }}
          zIndex={1}
          position={{
            x: 150,
            y: 150,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "red",
              borderRadius: 12,
            }}
          />
        </Entity>
        <Entity
          visible
          size={{
            width: 64,
            height: 64,
          }}
          zIndex={1}
          position={{
            x: 300,
            y: 300,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "yellow",
              borderRadius: 12,
            }}
          />
        </Entity>
      </Scene>
    </div>
  );
}

export default Game;
