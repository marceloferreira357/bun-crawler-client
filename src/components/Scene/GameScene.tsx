import { Size } from "../../common/types";

type GameSceneProps = {
  size: Size;
  update: () => void;
  children: React.ReactNode;
} & Pick<React.CSSProperties, "backgroundColor">;

function GameScene({
  size,
  backgroundColor,
  update,
  children,
}: GameSceneProps) {
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

export default GameScene;
