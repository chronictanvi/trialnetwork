import { useEffect, useState } from "react";

interface Props {
  square: string;
  setSquare: (text: string) => void;
}
export default function Form({ square, setSquare }: Props) {
  return (
    <textarea
      className="p-2 m-10"
      placeholder="Your post here"
      value={square}
      onChange={(e) => setSquare(e.target.value)}
    />
  );
}
