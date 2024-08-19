import { Size } from "../common/types";

type SceneProps = {
  size: Size;
  update: () => void;
  children: React.ReactNode;
} & Pick<React.CSSProperties, "backgroundColor">;

function Scene({ size, backgroundColor, update, children }: SceneProps) {
  update();

  return (
    <div
      style={{
        ...size,
        backgroundColor: backgroundColor ?? "transparent",
      }}
    >
      {children}
    </div>
  );
}

export default Scene;
