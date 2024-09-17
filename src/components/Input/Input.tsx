import { useEffect, useRef } from "react";
import { useShallow } from "zustand/react/shallow";
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
  const { deltaTime, isTyping, setIsTyping } = useGameStore(
    useShallow((state) => state)
  );

  const valueRef = useRef<string>("");
  const pressedKeys = useKeyPress();

  const valueCursorAnimationAccumulator = useRef<number>(0);
  const showValueCursor = useRef<boolean>(true);

  const containerRef = useRef<HTMLDivElement>(null);

  const update = () => {
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
    if (!isTyping) {
      setIsTyping(true);
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    const handleKeyUpResult = handleOnEnterPress(
      isTyping,
      valueRef.current,
      event,
      onChange
    );
    if (handleKeyUpResult) {
      setIsTyping(handleKeyUpResult.isTyping);
      valueRef.current = handleKeyUpResult.value;
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [isTyping]);

  useEffect(() => {
    const newValue = insertKey(isTyping, valueRef.current, pressedKeys);
    if (newValue !== undefined) {
      valueRef.current = newValue;
    }
  }, [pressedKeys]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, [valueRef.current]);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor,
        padding: "8px",
        borderRadius: "8px",
        width: "450px",
        height: "15.5px",
        overflowX: "auto",
      }}
      onClick={handleOnClick}
    >
      <Text fontSize={fontSize} color={isTyping ? "#ffffff" : "#AFA8BA"}>
        {isTyping ? valueRef.current : placeholder}
      </Text>
      {showValueCursor.current && isTyping && (
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
