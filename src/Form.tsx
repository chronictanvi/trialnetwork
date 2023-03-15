import { Square } from "./types";

interface Props {
  square?: Square;
  setSquare: (text: string) => void;
}
export default function Form({ square, setSquare }: Props) {
  return (
    <textarea
      className=" text-left  p-2 mt-10 border-[1px] border-slate-50 bg"
      placeholder="write here"
      value={square?.content || ""}
      onChange={(e) => setSquare(e.target.value)}
    />
  );
}
