import { useRef } from "react";
import { useShallow } from "zustand/react/shallow";
import DebugCard from "./components/DebugCard";
import GameObject from "./components/GameObject";
import Scene from "./components/Scene";
import SpriteSheet from "./components/SpriteSheet";
import useAnimationFrame from "./hooks/useAnimationFrame";
import useKeyPress from "./hooks/useKeyPress";
import useWebSocket from "./hooks/useWebSocket";
import { clientEmit } from "./network/client";
import useConnectionStore from "./stores/useConnectionStore";
import useGameStore from "./stores/useGameStore";

function Game() {
  const { socket } = useConnectionStore(useShallow((state) => state));
  const { deltaTime } = useGameStore(useShallow((state) => state));

  useAnimationFrame();
  useWebSocket();
  const pressedKeys = useKeyPress();

  const pingAccumulator = useRef(0);
  const pingInterval = useRef(1000);

  const entityPosition = useRef({
    x: 150,
    y: 150,
  });

  const update = () => {
    // moving the entity
    if (pressedKeys.includes("a")) {
      entityPosition.current.x -= 0.2 * deltaTime;
    }
    if (pressedKeys.includes("d")) {
      entityPosition.current.x += 0.2 * deltaTime;
    }
    if (pressedKeys.includes("w")) {
      entityPosition.current.y -= 0.2 * deltaTime;
    }
    if (pressedKeys.includes("s")) {
      entityPosition.current.y += 0.2 * deltaTime;
    }

    // calculating ping
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
        {/* rendering game objects */}
        <GameObject
          visible
          size={{
            width: 64,
            height: 64,
          }}
          position={entityPosition.current}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "red",
              borderRadius: 12,
            }}
          />
        </GameObject>
        {/* SpriteSheet example */}
        <SpriteSheet
          src={
            new URL(
              "/sprites/0x72_DungeonTilesetII_v1.7/0x72_DungeonTilesetII_v1.7.png",
              import.meta.env.VITE_PUBLIC_ADDRESS
            )
          }
          position={{
            x: 300,
            y: 300,
          }}
          scale={3}
          size={{
            width: 512,
            height: 512,
          }}
          tile={{
            position: {
              x: -16,
              y: -16,
            },
            size: {
              width: 16,
              height: 16,
            },
          }}
        />
      </Scene>
    </div>
  );
}

export default Game;
