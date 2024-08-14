import DebugCard from "./components/DebugCard";
import GameWrapper from "./components/GameWrapper";
import useAnimationFrame from "./hooks/useAnimationFrame";

function Game() {
  useAnimationFrame();

  return (
    <GameWrapper>
      <DebugCard position={{ x: 8, y: 8 }} />
    </GameWrapper>
  );
}

export default Game;
