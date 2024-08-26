import { useEffect, useRef } from "react";
import { Vector2 } from "../common/types";

const useCursorPosition = () => {
  const position = useRef<Vector2>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      position.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position.current;
};

export default useCursorPosition;
