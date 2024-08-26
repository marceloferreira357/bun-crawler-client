import { Rectangle, Vector2 } from "../../common/types";
import { handleBoxCollision } from "../../common/utils";

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
    width: child.props.size?.width ?? 0,
    height: child.props.size?.height ?? 0,
  };

  return handleBoxCollision(cameraBounds, childBounds);
};
