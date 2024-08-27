import { useWindowSize } from "@uidotdev/usehooks";
import { useRef } from "react";
import { useShallow } from "zustand/react/shallow";
import { handleBoxCollision, interpolatePosition } from "./common/utils";
import Camera from "./components/Camera/Camera";
import ControllerHud from "./components/ControllerHud/ControllerHud";
import Cursor from "./components/Cursor/Cursor";
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

  const windowSize = useWindowSize();

  useAnimationFrame();
  useWebSocket();
  const pressedKeys = useKeyPress();

  const pingAccumulator = useRef(0);
  const pingInterval = useRef(5000);

  const entityPosition = useRef({
    x: 150,
    y: 150,
  });

  const isPlayerColliding = useRef(false);

  const update = () => {
    const velocity = 0.5 * deltaTime;

    const targetPosition = {
      ...entityPosition.current,
    };

    // Update target position based on key presses
    if (pressedKeys.includes("a")) {
      targetPosition.x -= velocity;
    }
    if (pressedKeys.includes("d")) {
      targetPosition.x += velocity;
    }
    if (pressedKeys.includes("w")) {
      targetPosition.y -= velocity;
    }
    if (pressedKeys.includes("s")) {
      targetPosition.y += velocity;
    }

    // check for collisions
    if (
      handleBoxCollision(
        {
          x: targetPosition.x,
          y: targetPosition.y,
          width: 64,
          height: 64,
        },
        {
          x: 300,
          y: 300,
          width: 16 * 3,
          height: 16 * 3,
        }
      )
    ) {
      isPlayerColliding.current = true;
    } else {
      // update the player's position only if there is no collision
      isPlayerColliding.current = false;

      // interpolate current position towards the target position
      const alpha = 0.9;
      entityPosition.current.x = interpolatePosition(
        entityPosition.current.x,
        targetPosition.x,
        alpha
      );
      entityPosition.current.y = interpolatePosition(
        entityPosition.current.y,
        targetPosition.y,
        alpha
      );
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
      <Cursor />
      <DebugCard />
      <ControllerHud />
      {/* scenes */}
      <Scene size={{ width: "100dvw", height: "100dvh" }} update={update}>
        {/* rendering the camera */}
        <Camera position={{ x: 0, y: 0 }} size={windowSize} zoom={1}>
          {/* rendering game objects */}
          <GameObject
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
                y: -32,
              },
              size: {
                width: 16,
                height: 16,
              },
            }}
          />
        </Camera>
      </Scene>
    </div>
  );
}

export default Game;
