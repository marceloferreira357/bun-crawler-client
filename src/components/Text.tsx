import { Vector2 } from "../common/types";

type TextProps = {
  position?: Vector2;
  children: React.ReactNode;
  fontSize: string | number;
};

function Text({ position, children, fontSize }: TextProps) {
  return (
    <span
      style={{
        position: position ? "absolute" : "static",
        top: position?.y,
        left: position?.x,
        color: "#ffffff",
        fontSize,
      }}
    >
      {children}
    </span>
  );
}

export default Text;
