import { Vector2 } from "../common/types";

type TextProps = {
  position?: Vector2;
  children: React.ReactNode;
  fontSize: string | number;
  color?: string;
};

function Text({ position, children, fontSize, color = "#ffffff" }: TextProps) {
  return (
    <span
      style={{
        display: "inline",
        position: position ? "absolute" : "static",
        top: position?.y,
        left: position?.x,
        color,
        fontSize,
      }}
    >
      {children}
    </span>
  );
}

export default Text;
