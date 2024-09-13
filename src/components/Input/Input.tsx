import { useEffect, useRef } from "react";
import useKeyPress from "../../hooks/useKeyPress";
import useGameStore from "../../stores/useGameStore";
import Text from "../Text";
import {
  animateValueCursor,
  handleOnEnterPress,
  insertKey,
} from "./inputUtils";

type InputProps = {
  placeholder?: string;
  onChange?: (value: string) => void;
} & React.CSSProperties;

function Input({
  placeholder = "",
  onChange,
  backgroundColor,
  fontSize,
}: InputProps) {
  const { deltaTime } = useGameStore((state) => state);

  const valueRef = useRef<string>("");
  const isTypingRef = useRef<boolean>(false);
  const pressedKeys = useKeyPress();

  const valueCursorAnimationAccumulator = useRef<number>(0);
  const showValueCursor = useRef<boolean>(true);

  const update = () => {
    const newValue = insertKey(
      isTypingRef.current,
      valueRef.current,
      pressedKeys
    );
    if (newValue !== undefined) {
      valueRef.current = newValue;
    }

    const { accumulator, showCursor } = animateValueCursor(
      valueCursorAnimationAccumulator.current,
      showValueCursor.current,
      deltaTime
    );
    valueCursorAnimationAccumulator.current = accumulator;
    showValueCursor.current = showCursor;
  };
  update();

  const handleOnClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    isTypingRef.current = !isTypingRef.current;
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    const handleKeyUpResult = handleOnEnterPress(
      isTypingRef.current,
      valueRef.current,
      event,
      onChange
    );
    if (handleKeyUpResult) {
      isTypingRef.current = handleKeyUpResult.isTyping;
      valueRef.current = handleKeyUpResult.value;
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor,
        padding: "8px",
        borderRadius: "8px",
        width: "100%",
        height: "15.5px",
      }}
      onClick={handleOnClick}
    >
      <Text
        fontSize={fontSize}
        color={isTypingRef.current ? "#ffffff" : "#AFA8BA"}
      >
        {isTypingRef.current ? valueRef.current : placeholder}
      </Text>
      {showValueCursor.current && isTypingRef.current && (
        <div
          style={{
            display: "flex",
            width: "1.5px",
            height: "15.5px",
            backgroundColor: "#ffffff",
          }}
        />
      )}
    </div>
  );
}

export default Input;
