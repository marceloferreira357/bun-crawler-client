import { useWindowSize } from "@uidotdev/usehooks";
import { useRef } from "react";
import { useShallow } from "zustand/react/shallow";
import { playerDefaultAttributes } from "./common/constants";
import { Direction, PlayerGender, PlayerVariant } from "./common/types";
import {
  centerPlayer,
  handleBoxCollision,
  updateRelativePosition,
} from "./common/utils";
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

  const entityDirection = useRef<Direction>("right");
  const playerGender = useRef<PlayerGender>("male");
  const playerVariant = useRef<PlayerVariant>("inferno_knight");

  const cameraZoom = useRef(1);

  const relativePlayerPosition = useRef({
    x: 0,
    y: 0,
  });
  const playerPosition = useRef({
    x: 100,
    y: 100,
  });
  const relativeBoxPosition = useRef({
    x: 300,
    y: 300,
  });
  const boxPosition = useRef({
    x: 300,
    y: 300,
  });

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

    const playerTargetPosition = {
      ...playerPosition.current,
    };

    // update the camera zoom
    if (pressedKeys.includes("=")) {
      cameraZoom.current += 0.01;
    }
    if (pressedKeys.includes("-")) {
      cameraZoom.current -= 0.01;
    }

    // update target position based on key presses
    if (pressedKeys.includes("w") || pressedKeys.includes("W")) {
      entityDirection.current = "up";
      playerTargetPosition.y -= velocity;
    }
    if (pressedKeys.includes("s") || pressedKeys.includes("S")) {
      entityDirection.current = "down";
      playerTargetPosition.y += velocity;
    }
    if (pressedKeys.includes("a") || pressedKeys.includes("A")) {
      entityDirection.current = "left";
      playerTargetPosition.x -= velocity;
    }
    if (pressedKeys.includes("d") || pressedKeys.includes("D")) {
      entityDirection.current = "right";
      playerTargetPosition.x += velocity;
    }

    // check for collisions
    if (
      handleBoxCollision(
        {
          x: playerTargetPosition.x,
          y: playerTargetPosition.y,
          width:
            playerDefaultAttributes[playerVariant.current][playerGender.current]
              .size.width * 3,
          height:
            playerDefaultAttributes[playerVariant.current][playerGender.current]
              .size.height * 3,
        },
        {
          x: boxPosition.current.x,
          y: boxPosition.current.y,
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
      playerPosition.current = { ...playerTargetPosition };
    }

    // adjust positions based on fixed player position
    const alpha = 1;

    // center the player
    relativePlayerPosition.current = {
      ...centerPlayer(
        relativePlayerPosition.current,
        windowSize,
        playerVariant.current,
        playerGender.current,
        3,
        alpha
      ),
    };

    // calculate the game objects relative position
    relativeBoxPosition.current = {
      ...updateRelativePosition(
        relativePlayerPosition.current,
        boxPosition.current,
        playerPosition.current,
        alpha
      ),
    };

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
        <Camera
          position={{ x: 0, y: 0 }}
          size={windowSize}
          zoom={cameraZoom.current}
        >
          {/* rendering game objects */}
          <div
            style={{
              width: "100dvw",
              height: "100dvh",
              backgroundColor: "blue",
            }}
          />
          <Player
            position={relativePlayerPosition.current}
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
            position={relativeBoxPosition.current}
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
