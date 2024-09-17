const allowedKeys = new Set([
  ...Array.from(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 "
  ),
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "=",
  "+",
  "{",
  "}",
  "[",
  "]",
  "|",
  "\\",
  ":",
  ";",
  '"',
  "'",
  "?",
  "/",
  ",",
  ".",
  "<",
  ">",
]);

export const insertKey = (
  isTyping: boolean,
  value: string,
  pressedKeys: string[]
): string | undefined => {
  if (!isTyping) {
    return;
  }

  for (const key of pressedKeys) {
    if (key === "Backspace") {
      return value.slice(0, -1);
    } else if (allowedKeys.has(key)) {
      const newValue = `${value}${key}`;

      if (newValue.length > 256) {
        return;
      }

      return newValue;
    }
  }
};

export const animateValueCursor = (
  valueCursorAnimationAccumulator: number,
  showValueCursor: boolean,
  deltaTime: number
) => {
  if (valueCursorAnimationAccumulator >= 1500) {
    return {
      accumulator: 0,
      showCursor: !showValueCursor,
    };
  }

  return {
    accumulator: valueCursorAnimationAccumulator + deltaTime,
    showCursor: showValueCursor,
  };
};

export const handleOnEnterPress = (
  isTyping: boolean,
  value: string,
  event: KeyboardEvent,
  onChange?: (value: string) => void
) => {
  if (event.key !== "Enter") {
    return;
  }

  if (isTyping && onChange) {
    onChange(value);
  }
  return {
    isTyping: !isTyping,
    value: "",
  };
};
