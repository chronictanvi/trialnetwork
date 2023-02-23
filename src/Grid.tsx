import { SQUARE_ROW_COUNT, SQUARE_SIZE } from "./constants";
import { classNames } from "./utils";

interface Props {
  squares: string[];
  currentCoordinates: [number, number];
  otherUsers: { [key: string]: [number, number] };
}

function isInhabited(
  otherUsers: { [key: string]: [number, number] },
  row: number,
  column: number
) {
  return Object.values(otherUsers).some(
    (coordinates) =>
      coordinates.value[0] === row && coordinates.value[1] === column
  );
}

export default function Grid({
  squares,
  currentCoordinates,
  otherUsers,
}: Props) {
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${SQUARE_ROW_COUNT}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${SQUARE_ROW_COUNT}, minmax(0, 1fr))`,
      }}
      className="grid gap-1"
    >
      {squares.map((square, index) => {
        const row = Math.floor(index / SQUARE_ROW_COUNT);
        const column = index % SQUARE_ROW_COUNT;
        const isCurrent =
          row === currentCoordinates[0] && column === currentCoordinates[1];
        let color;
        if (isCurrent) {
          color = "bg-red-500";
        } else if (isInhabited(otherUsers, row, column)) {
          color = "bg-yellow-500";
        } else if (square !== "") {
          color = "bg-green-500";
        } else {
          color = "bg-slate-500";
        }
        return (
          <div
            title={square}
            key={index}
            className={classNames("w-10 h-10", color)}
          />
        );
      })}
    </div>
  );
}
