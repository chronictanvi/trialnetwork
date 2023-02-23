import { SQUARE_ROW_COUNT } from "./constants";

export function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getIndexFromCoordinates([row, column]: [
  number,
  number
]): number {
  return row * SQUARE_ROW_COUNT + column;
}

