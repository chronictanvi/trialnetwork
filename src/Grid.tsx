import { SQUARE_ROW_COUNT } from "./constants";
import { classNames, getCoordinatesFromIndex } from "./utils";

interface Props {
  squares: { [key: string]: { content: string; author: string } };
  currentCoordinates: [number, number];
}

export default function Grid({ squares, currentCoordinates }: Props) {
  const allSquares = Array(SQUARE_ROW_COUNT * SQUARE_ROW_COUNT).fill(null);
  for (const [coordString, post] of Object.entries(squares)) {
    const coords = coordString.split(",");

    const row = parseInt(coords[0]);
    const column = parseInt(coords[1]);
    const index = row * SQUARE_ROW_COUNT + column;

    const color = "bg-green-500";

    allSquares[index] = { color, ...post };
  }

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${SQUARE_ROW_COUNT}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${SQUARE_ROW_COUNT}, minmax(0, 1fr))`,
      }}
      className="grid gap-1"
    >
      {/* 
     below:  for square with content, paint green. for cursor (current) -> red. otherwise slate.  */}

      {allSquares.map((square, index) => {
        const [row, column] = getCoordinatesFromIndex(index);

        const isCurrent =
          row === currentCoordinates[0] && column === currentCoordinates[1];
        let color;

        // gray and green setting:
        if (square != null) {
          if (square.content == "") {
            color = "bg-slate-500";
          } else color = square.color;
        }

        if (isCurrent) {
          color = "bg-red-500";
        }

        return (
          <div
            key={index}
            className={classNames(
              "w-10 h-10",
              color,
              "border-[1px] border-slate-50"
            )}
          />
        );
      })}
    </div>
  );
}
