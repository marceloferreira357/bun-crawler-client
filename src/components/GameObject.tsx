import React, { forwardRef } from "react";
import { Entity } from "../common/types";

type GameObjectProps = {
  visible?: boolean;
  children: React.ReactNode;
} & Entity;

const GameObject = forwardRef<HTMLDivElement, GameObjectProps>(
  ({ visible = true, position, size, scale, zIndex, children }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          display: visible ? "inline-block" : "none",
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
