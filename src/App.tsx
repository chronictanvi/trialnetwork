import { useEffect, useState } from "react";
import "./App.css";
import Grid from "./Grid";
import { SQUARE_ROW_COUNT } from "./constants";
import useHotkeys from "@reecelucas/react-use-hotkeys";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";

import { useObject } from "react-firebase-hooks/database";
import { db } from "./firebase";
import { ref, set } from "firebase/database";
import { getCoordinateKey } from "./utils";

import Tutorial from "./Tutorial";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const url = new URL(document.location.toString());
//url is a built in datatype that javascript for browser has that allows u to take a string and read it.

let gridId = url.searchParams.get("gridId");
//if the grid id doesnt exist then we should be able to create a grid there.

// March 8
// Step 1: Trying to add a different colour for other uses
// Step 2: Make Demo
// Step 3: Build out UI for load grid etc

async function App() {
  const [currentCoordinates, setCurrentCoordinates] = useState<
    [number, number]
  >([0, 0]);

  const [currentIp, setCurrentIp] = useState<string>("");

  // scenario: A,B,C,D play. then stop playing. A then visits the website later. B,C,D are not there. X,Y,Z also join. X,Y,Z get new colors but A still has old color.

  const [snapshot, loading, error] = useObject(ref(db, `/grids/${gridId}`));

  const notify = () => toast("Wow so easy!");

  // -> made a new function that updates coordinates to firebase

  const setCoords = (row: number, column: number) => {
    setCurrentCoordinates([row, column]);
    // TODO: Update firebase
  };

  const getCurrentIp = async () => {
    return await fetch("https://api64.ipify.org/?format=json")
      .then((result) => result.json())
      .then((data) => data.ip);
  };

  useHotkeys("ArrowUp", () => {
    let row = currentCoordinates[0];
    let column = currentCoordinates[1];
    setCoords(Math.max(row - 1, 0), column);
    // setCurrentCoordinates(([row, column]) => [Math.max(row - 1, 0), column]);
  });
  useHotkeys("ArrowDown", () => {
    let row = currentCoordinates[0];
    let column = currentCoordinates[1];
    setCoords(Math.min(row + 1, SQUARE_ROW_COUNT - 1), column);

    // setCurrentCoordinates(([row, column]) => [
    // Math.min(row + 1, SQUARE_ROW_COUNT - 1),
    // column,
    // ]);
  });

  useHotkeys("ArrowLeft", () => {
    let row = currentCoordinates[0];
    let column = currentCoordinates[1];
    setCoords(row, Math.max(column - 1, 0));

    // setCurrentCoordinates(([row, column]) => [row, Math.max(column - 1, 0)]);
  });

  useHotkeys("ArrowRight", () => {
    let row = currentCoordinates[0];
    let column = currentCoordinates[1];
    setCoords(row, Math.min(column + 1, SQUARE_ROW_COUNT - 1));
    // setCurrentCoordinates(([row, column]) => [
    //   row,
    //   Math.min(column + 1, SQUARE_ROW_COUNT - 1),
    // ]);
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

  const handleNewGrid = () => {
    if (!gridId) {
      gridId = uuidv4();
      window.history.pushState({}, "", `?gridId=${gridId}`);
    }
    const newId = parseInt(gridId!) + 1;
    const path = `/grids/${newId}/00,00`;
    set(ref(db, path), { content: "hello world!" });

    // make a copy of squares, change all the values to null.
    // then write that to firebase
  };

  const ip = await getCurrentIp();
  console.log(ip);

  return (
    <>
      <div className=" grid grid-cols-2">
        <div>
          <h1 className="text-left">Comrade</h1>
        </div>
        <div>
          <p className="editorial text-zinc-400 pt-3 text-right text-sm">
            v0.2
          </p>
          <p className="editorial text-zinc-400 text-right text-sm">
            Desktop only
          </p>
        </div>
      </div>
      <Tutorial></Tutorial>
      <div className=" grid grid-cols-2 my-10">
        <div>
          <h1
            className="text-base cursor-pointer text-left"
            onClick={handleNewGrid}
          >
            New Grid
          </h1>
        </div>
        <div>
          <h1 className="text-base text-left">Load Grid</h1>
        </div>
      </div>

      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>

      <div className="flex">
        <div className="flex-none p-5">
          <p> heuyaai </p>
        </div>
        <div className="flex-1">
          <Grid squares={squares} currentCoordinates={currentCoordinates} />
        </div>

        <div className="flex-none p-5">
          <p> hiii </p>{" "}
        </div>
      </div>
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

//listening to the squares and adding the form
// ratik will now look at the docs. how do i set up the new grid to be set up like grid 1
