import React from "react";
import { Vector2 } from "../../common/types";
import { isChildVisible } from "./cameraUtils";

type CameraProps = {
  children: React.ReactNode;
  position: Vector2;
  size: {
    width: number | null;
    height: number | null;
  };
  zoom?: number;
};

function Camera({ children, position, size, zoom = 1 }: CameraProps) {
  const visibleChildren = React.Children.toArray(children).filter((child) => {
    return (
      React.isValidElement(child) &&
      isChildVisible(position, size, child as React.ReactElement)
    );
  });

  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        width: size?.width ?? 0,
        height: size?.height ?? 0,
        transform: `scale(${zoom})`,
        transformOrigin: "top left",
        overflow: "hidden",
      }}
    >
      {visibleChildren}
    </div>
  );
}

export default Camera;
