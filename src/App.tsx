import { useEffect, useState } from "react";
import "./App.css";
import Grid from "./Grid";
import { SQUARE_ROW_COUNT } from "./constants";
import useHotkeys from "@reecelucas/react-use-hotkeys";
import Form from "./Form";
import Label from "./Label";
import { useObject } from "react-firebase-hooks/database";
import { db } from "./firebase";
import { ref, set } from "firebase/database";
import { getCoordinateKey } from "./utils";

const url = new URL(document.location);
//url is a built in datatype that javascript for browser has that allows u to take a string and read it.

const gridId = url.searchParams.get("gridId");
//if the grid id doesnt exist then we should be able to create a grid there.

function App() {
  const [currentCoordinates, setCurrentCoordinates] = useState<
    [number, number]
  >([0, 0]);

  const [snapshot, loading, error] = useObject(ref(db, `/grids/${gridId}`));

  useHotkeys("ArrowUp", () => {
    setCurrentCoordinates(([row, column]) => [Math.max(row - 1, 0), column]);
  });
  useHotkeys("ArrowDown", () => {
    setCurrentCoordinates(([row, column]) => [
      Math.min(row + 1, SQUARE_ROW_COUNT - 1),
      column,
    ]);
  });
  useHotkeys("ArrowLeft", () => {
    setCurrentCoordinates(([row, column]) => [row, Math.max(column - 1, 0)]);
  });
  useHotkeys("ArrowRight", () => {
    setCurrentCoordinates(([row, column]) => [
      row,
      Math.min(column + 1, SQUARE_ROW_COUNT - 1),
    ]);
  });

  const currentCoordsKey = getCoordinateKey(currentCoordinates);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.toString()}</div>;
  }
  // see: https://github.com/csfrequency/react-firebase-hooks/tree/09bf06b28c82b4c3c1beabb1b32a8007232ed045/database

  const squares = snapshot?.val();
  return (
    <>
      <div className=" grid grid-cols-2">
        <div>
          <h1 className="text-left">Comrade</h1>
        </div>
        <div>
          <p className="editorial pt-6 text-right text-sm">v0.2</p>
        </div>
      </div>
      <div className=" grid grid-cols-2 my-5">
        <div>
          <h1 className="text-base text-left">New Grid</h1>
        </div>
        <div>
          <h1 className="text-base text-left">Load Grid</h1>
        </div>
      </div>

      <Label
        name={squares[currentCoordsKey]?.author || ""}
        setName={async (author) => {
          set(ref(db, `/grids/${gridId}/${currentCoordsKey}`), {
            author,
          });
        }}
      ></Label>

      <Grid squares={squares} currentCoordinates={currentCoordinates} />
      <Form
        square={squares[currentCoordsKey]}
        setSquare={async (content) => {
          set(ref(db, `/grids/${gridId}/${currentCoordsKey}`), {
            content,
          });
        }}
      />
    </>
  );
}

export default App;
