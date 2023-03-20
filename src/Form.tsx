import { Square } from "./types";

interface Props {
  square?: Square;
  setSquare: (text: string) => void;
}
export default function Form({ square, setSquare }: Props) {
  return (
    <textarea
      className=" text-left text-white bg-slate-500 p-2 mt-10 border-[1px] border-slate-50 "
      placeholder="write here"
      value={square?.content || ""}
      onChange={(e) => setSquare(e.target.value)}
    />
  );
}
