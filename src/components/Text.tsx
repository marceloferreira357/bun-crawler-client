import React, { forwardRef } from "react";
import { Entity } from "../common/types";
import GameObject from "./GameObject";

type TextProps = {
  children: React.ReactNode;
} & Pick<Entity, "position"> &
  Pick<React.CSSProperties, "color" | "fontSize">;

const Text = forwardRef<HTMLDivElement, TextProps>(
  ({ position, children, fontSize, color = "#ffffff" }, ref) => {
    return (
      <GameObject ref={ref} position={position}>
        <span
          style={{
            color,
            fontSize,
          }}
        >
          {children}
        </span>
      </GameObject>
    );
  }
);

export default Text;
