import { useRef } from "react";
import { PixelSize } from "../../common/types";
import Text from "../Text";

type NameBadgeProps = {
  name: string;
  size: PixelSize;
  scale: number;
};

function NameBadge({ name, size, scale }: NameBadgeProps) {
  const nameRef = useRef<HTMLDivElement | null>(null);

  const nameWidth = useRef<number>(0);

  const update = () => {
    if (nameRef.current && nameWidth.current === 0) {
      nameWidth.current = nameRef.current.offsetWidth + 16;
    }
  };
  update();

  return (
    <div
      style={{
        position: "absolute",
        top: -32,
        left: (size.width * scale) / 2 - nameWidth.current / 2,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        padding: "8px",
        borderRadius: "8px",
      }}
    >
      <div
        ref={nameRef}
        style={{
          whiteSpace: "nowrap",
          wordBreak: "keep-all",
          overflowWrap: "normal",
        }}
      >
        <Text fontSize="1rem">{name}</Text>
      </div>
    </div>
  );
}

export default NameBadge;
