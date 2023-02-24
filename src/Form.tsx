import { useEffect, useState } from "react";

interface Props {
  square: string;
  setSquare: (text: string) => void;
}

export default function Form({ square, setSquare }: Props) {
  return (
    <textarea
      className=" text-left  p-2 my-10 border-[1px] border-slate-50 bg"
      placeholder="write here"
      value={square?.content || ""}
      onChange={(e) => setSquare(e.target.value)}
    />
  );
}
