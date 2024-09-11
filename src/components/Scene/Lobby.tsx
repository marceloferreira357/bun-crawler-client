import { useWindowSize } from "@uidotdev/usehooks";
import { useRef } from "react";
import { useShallow } from "zustand/react/shallow";
import { playerDefaultAttributes } from "../../common/constants";
import { Direction, RelativePosition, Vector2 } from "../../common/types";
import {
  centerPlayer,
  getPositionsMap,
  updateRelativePositions,
} from "../../common/utils";
import useKeyPress from "../../hooks/useKeyPress";
import lobby from "../../maps/lobby.json";
import { clientEmit } from "../../network/client";
import useConnectionStore from "../../stores/useConnectionStore";
import useGameStore from "../../stores/useGameStore";
import useSceneStore from "../../stores/useSceneStore";
import Camera from "../Camera/Camera";
import Map from "../Map/Map";
import Player from "../Player/Player";
import GameScene from "./GameScene";

function Lobby() {
  const { socket } = useConnectionStore(useShallow((state) => state));
  const { deltaTime } = useGameStore(useShallow((state) => state));
  const { players } = useSceneStore(useShallow((state) => state));

  const windowSize = useWindowSize();
  const pressedKeys = useKeyPress();

  const pingAccumulator = useRef(0);
  const pingInterval = useRef(5000);

  const cameraZoom = useRef(1);

  const relativePlayerPosition = useRef<Vector2>({ x: 0, y: 0 });

  const relativeGridMapTilesPositions = useRef<RelativePosition[]>([
    ...lobby.tiles.map((tile, index) => ({
      id: String(index),
      position: tile.position,
    })),
  ]);

  const gridMapTilesPositions = useRef([
    ...relativeGridMapTilesPositions.current,
  ]);

  const relativePlayersPositions = useRef<RelativePosition[]>([
    ...players.map(({ id, position }) => ({ id, position })),
  ]);

  const update = () => {
    const player = players.find((player) => player.id === socket.id);
    if (!player) {
      return;
    }

    relativePlayersPositions.current = [
      ...players.map(({ id, position }) => ({ id, position })),
    ];

    // Update camera zoom based on key presses
    if (pressedKeys.includes("=")) {
      cameraZoom.current += 0.01;
    }
    if (pressedKeys.includes("-")) {
      cameraZoom.current -= 0.01;
    }

    // Update player target position based on key presses
    const movingUp = pressedKeys.includes("w") || pressedKeys.includes("W");
    const movingDown = pressedKeys.includes("s") || pressedKeys.includes("S");
    const movingLeft = pressedKeys.includes("a") || pressedKeys.includes("A");
    const movingRight = pressedKeys.includes("d") || pressedKeys.includes("D");

    let isMoving = false;
    let newDirection: Direction | undefined;
    if (movingUp && movingLeft) {
      newDirection = "up_left";
      isMoving = true;
    } else if (movingUp && movingRight) {
      newDirection = "up_right";
      isMoving = true;
    } else if (movingDown && movingLeft) {
      newDirection = "down_left";
      isMoving = true;
    } else if (movingDown && movingRight) {
      newDirection = "down_right";
      isMoving = true;
    } else if (movingUp) {
      newDirection = "up";
      isMoving = true;
    } else if (movingDown) {
      newDirection = "down";
      isMoving = true;
    } else if (movingLeft) {
      newDirection = "left";
      isMoving = true;
    } else if (movingRight) {
      newDirection = "right";
      isMoving = true;
    }

    if (
      (!player.isMoving && isMoving) ||
      (newDirection !== undefined && newDirection !== player.direction)
    ) {
      clientEmit(socket, "player_movement", [newDirection, true]);
    }
    if (player.isMoving && !isMoving) {
      clientEmit(socket, "player_movement", [player.direction, false]);
    }

    // Center the player and update grid map tiles and other players' positions
    relativePlayerPosition.current = centerPlayer(
      relativePlayerPosition.current,
      windowSize,
      player.variant,
      player.gender,
      3,
      cameraZoom.current
    );

    relativeGridMapTilesPositions.current = updateRelativePositions(
      relativeGridMapTilesPositions.current,
      gridMapTilesPositions.current,
      relativePlayerPosition.current,
      player.position,
      1
    );

    relativePlayersPositions.current = updateRelativePositions(
      relativePlayersPositions.current,
      players.map(({ id, position }) => ({ id, position })),
      relativePlayerPosition.current,
      player.position,
      1
    );

    // Calculate and emit ping
    pingAccumulator.current += deltaTime;
    if (pingAccumulator.current >= pingInterval.current) {
      clientEmit(socket, "ping", [Date.now()]);
      pingAccumulator.current = 0;
    }
  };

  const relativePlayersPositionsMap = getPositionsMap(
    relativePlayersPositions.current
  );

  return (
    <GameScene size={{ width: "100dvw", height: "100dvh" }} update={update}>
      <Camera
        position={{ x: 0, y: 0 }}
        size={windowSize}
        zoom={cameraZoom.current}
      >
        <Map
          variant="lobby"
          relativePositions={relativeGridMapTilesPositions.current}
        />
        {players.map((player) => (
          <Player
            key={player.id}
            position={relativePlayersPositionsMap.get(player.id)}
            gender={player.gender}
            direction={player.direction}
            scale={3}
            size={{
              width:
                playerDefaultAttributes[player.variant][player.gender].size
                  .width,
              height:
                playerDefaultAttributes[player.variant][player.gender].size
                  .height,
            }}
            variant={player.variant}
            isMoving={player.isMoving}
          />
        ))}
      </Camera>
    </GameScene>
  );
}

export default Lobby;
