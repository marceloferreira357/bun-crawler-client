import React, { forwardRef } from "react";
import { Size, Vector2 } from "../common/types";

type EntityProps = {
  visible: boolean;
  position?: Vector2;
  size: Size;
  zIndex?: number;
  children: React.ReactNode;
};

const Entity = forwardRef<HTMLDivElement, EntityProps>(
  ({ visible, position, size, zIndex, children }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          position: position ? "absolute" : "static",
          display: visible ? "block" : "none",
          top: position?.y,
          left: position?.x,
          width: size.width,
          height: size.height,
          zIndex,
        }}
      >
        {children}
      </div>
    );
  }
);

Entity.displayName = "Entity";

export default Entity;
