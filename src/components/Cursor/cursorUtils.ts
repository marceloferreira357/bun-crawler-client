import { CursorVariant } from "../../common/types";

export const getCursorTile = (cursorVariant: CursorVariant) => {
  switch (cursorVariant) {
    case "triangle2":
      return {
        x: -354,
        y: -130,
        width: 12,
        height: 13,
      };
    case "triangle3":
      return {
        x: -370,
        y: -130,
        width: 12,
        height: 13,
      };
    case "pointing":
      return {
        x: -385,
        y: -129,
        width: 13,
        height: 13,
      };
    case "hand":
      return {
        x: -401,
        y: -129,
        width: 14,
        height: 13,
      };
    case "holding":
      return {
        x: -418,
        y: -130,
        width: 13,
        height: 12,
      };
    default:
      return {
        x: -338,
        y: -130,
        width: 12,
        height: 13,
      };
  }
};
