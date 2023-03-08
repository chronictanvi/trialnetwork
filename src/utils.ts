import { SQUARE_ROW_COUNT } from "./constants";

export function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

//index is of type number and it returns an array with two elements, both of which are numbers

export function getCoordinatesFromIndex(index: number): [number, number] {
  const row = Math.floor(index / SQUARE_ROW_COUNT);
  const column = index % SQUARE_ROW_COUNT;
  return [row, column];
}

//convert list [0,5] -> 00,05
export function getCoordinateKey(coords: number[]): string {
  const row = coords[0];
  const rowString = row.toString().padStart(2, "0");
  const col = coords[1];
  const colString = col.toString().padStart(2, "0");

  return `${rowString},${colString}`;
}
