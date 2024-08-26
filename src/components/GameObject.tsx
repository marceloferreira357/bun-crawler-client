import React, { forwardRef } from "react";
import { Entity } from "../common/types";

type GameObjectProps = {
  children: React.ReactNode;
} & Entity;

const GameObject = forwardRef<HTMLDivElement, GameObjectProps>(
  ({ position, size, scale, zIndex, children }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          display: "inline-block",
          position: position ? "absolute" : "static",
          top: position?.y,
          left: position?.x,
          width: size?.width,
          height: size?.height,
          transform: scale ? `scale(${scale})` : undefined,
          transformOrigin: "top left",
          overflow: size ? "hidden" : "visible",
          zIndex,
        }}
      >
        {children}
      </div>
    );
  }
);

GameObject.displayName = "GameObject";

export default GameObject;
