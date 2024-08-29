import { useWindowSize } from "@uidotdev/usehooks";
import { useRef } from "react";
import { useShallow } from "zustand/react/shallow";
import { playerDefaultAttributes } from "./common/constants";
import { Direction, PlayerGender, PlayerVariant } from "./common/types";
import { handleBoxCollision, interpolatePosition } from "./common/utils";
import Camera from "./components/Camera/Camera";
import ControllerHud from "./components/ControllerHud/ControllerHud";
import Cursor from "./components/Cursor/Cursor";
import DebugCard from "./components/DebugCard";
import Player from "./components/Player/Player";
import Scene from "./components/Scene";
import SpriteSheet from "./components/SpriteSheet";
import useAnimationFrame from "./hooks/useAnimationFrame";
import useAudio from "./hooks/useAudio";
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
  const entityDirection = useRef<Direction>("right");
  const playerGender = useRef<PlayerGender>("male");
  const playerVariant = useRef<PlayerVariant>("ember_champion");

  const isPlayerColliding = useRef(false);
  const collisionAudio = useAudio({
    src: new URL(
      "/sfx/RPG_Essentials_Free/12_Player_Movement_SFX/08_Step_rock_02.wav",
      import.meta.env.VITE_PUBLIC_ADDRESS
    ),
    volume: 0.5,
  });

  const update = () => {
    const velocity = 0.2 * deltaTime;

    const targetPosition = {
      ...entityPosition.current,
    };

    // Update target position based on key presses
    if (pressedKeys.includes("w") || pressedKeys.includes("W")) {
      entityDirection.current = "up";
      targetPosition.y -= velocity;
    }
    if (pressedKeys.includes("s") || pressedKeys.includes("S")) {
      entityDirection.current = "down";
      targetPosition.y += velocity;
    }
    if (pressedKeys.includes("a") || pressedKeys.includes("A")) {
      entityDirection.current = "left";
      targetPosition.x -= velocity;
    }
    if (pressedKeys.includes("d") || pressedKeys.includes("D")) {
      entityDirection.current = "right";
      targetPosition.x += velocity;
    }

    // check for collisions
    if (
      handleBoxCollision(
        {
          x: targetPosition.x,
          y: targetPosition.y,
          width:
            playerDefaultAttributes[playerVariant.current][playerGender.current]
              .size.width * 3,
          height:
            playerDefaultAttributes[playerVariant.current][playerGender.current]
              .size.height * 3,
        },
        {
          x: 300,
          y: 300,
          width: 16 * 3,
          height: 16 * 3,
        }
      )
    ) {
      // play audio
      if (!isPlayerColliding.current) {
        collisionAudio.play();
      }
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
          <Player
            position={entityPosition.current}
            gender={playerGender.current}
            direction={entityDirection.current}
            scale={3}
            size={{
              width:
                playerDefaultAttributes[playerVariant.current][
                  playerGender.current
                ].size.width,
              height:
                playerDefaultAttributes[playerVariant.current][
                  playerGender.current
                ].size.height,
            }}
            variant={playerVariant.current}
          />
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
