import { playerDefaultAttributes } from "./constants";
import {
  Circle,
  GridMapTileRelativePosition,
  PlayerGender,
  PlayerVariant,
  Rectangle,
  Vector2,
} from "./types";

export const fixDecimalPlaces = (num: number, maxDecimals: number) => {
  return Number(num.toFixed(maxDecimals));
};

export const interpolatePosition = (
  start: number,
  end: number,
  alpha: number
) => {
  return start + (end - start) * alpha;
};

export const handleBoxCollision = (
  box1: Rectangle,
  box2: Rectangle
): boolean => {
  const isColliding =
    box1.x < box2.x + box2.width &&
    box1.x + box1.width > box2.x &&
    box1.y < box2.y + box2.height &&
    box1.y + box1.height > box2.y;

  return isColliding;
};

export const handleCircleCollision = (
  circle1: Circle,
  circle2: Circle
): boolean => {
  const centerX1 = circle1.x + circle1.width / 2;
  const centerY1 = circle1.y + circle1.height / 2;
  const centerX2 = circle2.x + circle2.width / 2;
  const centerY2 = circle2.y + circle2.height / 2;

  const dx = centerX2 - centerX1;
  const dy = centerY2 - centerY1;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const isColliding = distance < circle1.radius + circle2.radius;

  return isColliding;
};

export const centerPlayer = (
  relativePlayerPosition: Vector2,
  windowSize: {
    width: number | null;
    height: number | null;
  },
  playerVariant: PlayerVariant,
  playerGender: PlayerGender,
  scale: number,
  alpha: number
) => {
  const {
    size: { width, height },
  } = playerDefaultAttributes[playerVariant][playerGender];

  const x = interpolatePosition(
    relativePlayerPosition.x,
    (windowSize.width || 0) / 2 - (width * scale) / 2,
    alpha
  );
  const y = interpolatePosition(
    relativePlayerPosition.y,
    (windowSize.height || 0) / 2 - (height * scale) / 2,
    alpha
  );

  return {
    x,
    y,
  };
};

export const updateRelativePosition = (
  relativePlayerPosition: Vector2,
  position: Vector2,
  playerPosition: Vector2,
  alpha: number
) => {
  const x = interpolatePosition(
    relativePlayerPosition.x,
    relativePlayerPosition.x + position.x - playerPosition.x,
    alpha
  );
  const y = interpolatePosition(
    relativePlayerPosition.y,
    relativePlayerPosition.y + position.y - playerPosition.y,
    alpha
  );

  return {
    x,
    y,
  };
};

export const updateRelativeGridMapTilesPositions = (
  relativeGridMapTilesPositions: GridMapTileRelativePosition[],
  gridMapTilesPositions: GridMapTileRelativePosition[],
  relativePlayerPosition: Vector2,
  playerPosition: Vector2,
  alpha: number
) => {
  const gridMapTilesPositionMap = new Map<number, Vector2>(
    gridMapTilesPositions.map((gridMapTileRelativePosition) => [
      gridMapTileRelativePosition.index,
      gridMapTileRelativePosition.position!,
    ])
  );

  const updatedRelativeGridMapTilesPositions =
    relativeGridMapTilesPositions.map((relativeGridMapTilesPosition) => {
      const gridMapTilePosition = gridMapTilesPositionMap.get(
        relativeGridMapTilesPosition.index
      );

      if (gridMapTilePosition) {
        const newPosition = updateRelativePosition(
          relativePlayerPosition,
          gridMapTilePosition!,
          playerPosition,
          alpha
        );

        return {
          ...relativeGridMapTilesPosition,
          position: newPosition,
        };
      }

      return relativeGridMapTilesPosition;
    });

  return updatedRelativeGridMapTilesPositions;
};
