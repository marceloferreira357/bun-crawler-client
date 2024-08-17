import { useEffect, useRef } from "react";

const useKeyPress = () => {
  const pressedKeysRef = useRef<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      if (!pressedKeysRef.current.includes(key)) {
        pressedKeysRef.current = [...pressedKeysRef.current, key];
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const key = event.key;
      pressedKeysRef.current = pressedKeysRef.current.filter((k) => k !== key);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return pressedKeysRef.current;
};

export default useKeyPress;
