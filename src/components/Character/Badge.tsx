import { useEffect, useRef } from "react";
import { PixelSize } from "../../common/types";
import Text from "../Text";

type BadgeProps = {
  text: string;
  size: PixelSize;
  scale: number;
} & Pick<React.CSSProperties, "top">;

function Badge({ text, size, scale, top }: BadgeProps) {
  const badgeRef = useRef<HTMLDivElement | null>(null);

  const width = useRef<number>(0);

  useEffect(() => {
    if (badgeRef.current) {
      width.current = badgeRef.current.offsetWidth + 16;
    }
  }, [text, badgeRef.current]);

  return (
    <div
      style={{
        position: "absolute",
        top,
        left: (size.width * scale) / 2 - width.current / 2,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        padding: "8px",
        borderRadius: "8px",
      }}
    >
      <div
        ref={badgeRef}
        style={{
          whiteSpace: "nowrap",
          wordBreak: "keep-all",
          overflowWrap: "normal",
        }}
      >
        <Text fontSize="1rem">{text}</Text>
      </div>
    </div>
  );
}

export default Badge;
