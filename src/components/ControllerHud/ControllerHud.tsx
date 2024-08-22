import { ZIndex } from "../../common/constants";
import useKeyPress from "../../hooks/useKeyPress";
import AKeySpriteSheet from "./AKeySpriteSheet";
import DKeySpriteSheet from "./DKeySpriteSheet";
import SKeySpriteSheet from "./SKeySpriteSheet";
import WKeySpriteSheet from "./WKeySpriteSheet";

function ControllerHud() {
  const pressedKeys = useKeyPress();

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        gap: "calc(12px * 3)",
        bottom: 12,
        left: 12,
        width: 152,
        height: 100,
        zIndex: ZIndex.controllerHud,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "end",
          justifyContent: "center",
          width: "calc(100% - 30px)",
          height: 16,
        }}
      >
        <WKeySpriteSheet pressedKeys={pressedKeys} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "end",
          gap: "calc(12px * 3)",
          height: 16,
        }}
      >
        <AKeySpriteSheet pressedKeys={pressedKeys} />
        <SKeySpriteSheet pressedKeys={pressedKeys} />
        <DKeySpriteSheet pressedKeys={pressedKeys} />
      </div>
    </div>
  );
}

export default ControllerHud;
