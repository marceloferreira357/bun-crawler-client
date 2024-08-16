import { Size } from "../common/types";

type SceneProps = {
  size: Size;
  backgroundColor?: string;
  update: () => void;
  children: React.ReactNode;
};

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
