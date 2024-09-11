import { useShallow } from "zustand/react/shallow";
import ConnectionStatus from "./components/ConnectionStatus/ConnectionStatus";
import ControllerHud from "./components/ControllerHud/ControllerHud";
import Cursor from "./components/Cursor/Cursor";
import DebugCard from "./components/DebugCard";
import Scene from "./components/Scene/Scene";
import useAnimationFrame from "./hooks/useAnimationFrame";
import useWebSocket from "./hooks/useWebSocket";
import useConnectionStore from "./stores/useConnectionStore";
import useSceneStore from "./stores/useSceneStore";

function Game() {
  const { connectionStatus } = useConnectionStore(useShallow((state) => state));
  const { scene } = useSceneStore(useShallow((state) => state));

  useAnimationFrame();
  useWebSocket();

  if (connectionStatus !== "connected") {
    return <ConnectionStatus />;
  }

  return (
    <div style={{ position: "relative", cursor: "none" }}>
      <Cursor />
      <DebugCard />
      <ControllerHud />
      <Scene variant={scene} />
    </div>
  );
}

export default Game;
