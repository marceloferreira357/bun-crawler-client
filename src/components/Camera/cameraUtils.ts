import { Rectangle, Vector2 } from "../../common/types";

export const isChildVisible = (
  position: Vector2,
  size: {
    width: number | null;
    height: number | null;
  },
  child: React.ReactElement
): boolean => {
  const cameraBounds: Rectangle = {
    x: position.x,
    y: position.y,
    width: size?.width ?? 0,
    height: size?.height ?? 0,
  };

  const childBounds: Rectangle = {
    x: child.props.position?.x ?? 0,
    y: child.props.position?.y ?? 0,
    width: child.props.size?.width * child.props.scale || 0,
    height: child.props.size?.height * child.props.scale || 0,
  };

  // Calculate the edges of the camera and child
  const cameraRight = cameraBounds.x + cameraBounds.width;
  const cameraBottom = cameraBounds.y + cameraBounds.height;
  const childRight = childBounds.x + childBounds.width;
  const childBottom = childBounds.y + childBounds.height;

  // Check if the child is completely outside the camera bounds
  const isOutside =
    childRight < cameraBounds.x || // Child's right edge is left of camera's left edge
    childBottom < cameraBounds.y || // Child's bottom edge is above camera's top edge
    childBounds.x > cameraRight || // Child's left edge is right of camera's right edge
    childBounds.y > cameraBottom; // Child's top edge is below camera's bottom edge

  return !isOutside;
};
