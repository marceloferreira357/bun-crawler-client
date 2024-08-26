import React from "react";
import { Entity } from "../common/types";

type GameObjectProps = {
  children: React.ReactNode;
} & Entity;

function GameObject({
  position,
  size,
  scale,
  zIndex,
  children,
}: GameObjectProps) {
  return (
    <div
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

export default GameObject;
