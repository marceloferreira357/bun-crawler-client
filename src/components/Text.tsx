import React from "react";
import { Entity } from "../common/types";
import GameObject from "./GameObject";

type TextProps = {
  children: React.ReactNode;
} & Pick<Entity, "position"> &
  Pick<React.CSSProperties, "color" | "fontSize">;

function Text({ position, children, fontSize, color = "#ffffff" }: TextProps) {
  return (
    <GameObject position={position}>
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

export default Text;
