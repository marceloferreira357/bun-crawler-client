import { Circle, Rectangle } from "./types";

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
