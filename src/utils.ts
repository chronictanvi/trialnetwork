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

//hashing algortihm takes a string and turns it into a number (index into a array)
// useful when you want to put items into a lookup table
function hashCode(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    let chr = str.charCodeAt(i);
    // shift the binary representation
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32 bit integer
  }
  return Math.abs(hash);
}

export function getColorFromIp(ip: string) {
  let hash = hashCode(ip);
  const SQUARE_COLOURS = [
    "bg-green-500",
    "bg-rose-400",
    "bg-fuchsia-400",
    "bg-indigo-400",
    "bg-teal-400",
  ];
  console.log(hash);
  const index = hash % SQUARE_COLOURS.length;
  return SQUARE_COLOURS[index];
}
