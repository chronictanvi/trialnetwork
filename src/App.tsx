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

import moment from "moment";
import { Square } from "./types";

const url = new URL(document.location.toString());
//url is a built in datatype that javascript for browser has that allows u to take a string and read it.

let gridId = url.searchParams.get("gridId");
//if the grid id doesnt exist then we should be able to create a grid there.

// March 8
// Step 1: Trying to add a different colour for other uses
// Step 2: Make Demo
// Step 3: Build out UI for load grid etc

function App() {
  const [snapshot, loading, error] = useObject(ref(db, `/grids/${gridId}`));

  const [currentIp, setCurrentIp] = useState<string>("");

  const [currentCoordinates, setCurrentCoordinates] = useState<number[]>([
    0, 0,
  ]);

  // scenario: A,B,C,D play. then stop playing. A then visits the website later. B,C,D are not there. X,Y,Z also join. X,Y,Z get new colors but A still has old color.

  useEffect(() => {
    const getCurrentIp = async () => {
      const ip: string = await fetch("https://api64.ipify.org/?format=json")
        .then((result) => result.json())
        .then((data) => data.ip);
      if (currentIp === "") {
        setCurrentIp(ip.replaceAll(".", "-"));
      }
    };

    getCurrentIp();
  });

  // const notify = () => toast("Wow so easy!");

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

  const squares: { [key: string]: Square } = snapshot?.val();

  // getting unique authors for a grid in all squares
  const getUniqueAuthorsForGrid = function (): string[] {
    let authors: string[] = [];
    Object.values(squares).forEach((square: Square) => {
      if (square.author) {
        authors.push(square.author);
      }
    });
    return [...new Set(authors)];
  };

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

  return (
    <>
      <div className=" grid grid-cols-2">
        <div>
          <h1 className="text-left text-5xl border-1 border-white">Comrade</h1>
        </div>
        <div>
          <p className="editorial text-zinc-400 pt-5 text-right text-sm">
            v0.2
          </p>
          <p className="editorial text-zinc-400 text-right text-sm">
            Desktop only
          </p>
        </div>
      </div>
      <Tutorial></Tutorial>
      <div className=" grid grid-cols-2 my-5">
        <div className=" grid grid-cols-2 my-5">
          <div>
            <h1
              className="text-lg cursor-pointer text-left"
              onClick={handleNewGrid}
            >
              New Grid
            </h1>
          </div>
          <div>
            <h1 className="text-lg text-left">Load Grid</h1>
          </div>
        </div>
      </div>

      {/* 
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div> */}

      <div className="flex">
        <div className="flex-none">
          <Grid
            currentIp={currentIp}
            squares={squares}
            currentCoordinates={currentCoordinates}
            authors={getUniqueAuthorsForGrid()}
          />
        </div>

        <div className=" px-5">
          <h1 className="text-lg cursor-pointer text-left">Timestamp</h1>
          <p className="font-mono text-left text-zinc-400 text-xs px-1 ">
            {squares[currentCoordsKey]?.editedAt
              ? squares[currentCoordsKey].editedAt
              : "-"}
          </p>
          <h1 className="text-lg cursor-pointer pt-10 text-left">Prompt</h1>
          <p className="font-mono text-left text-zinc-400 w-6/12 text-xs px-1 ">
            {" "}
            Start from the center. Imagine a 'tolerable' version tending to the
            left. An 'intolerable' version tending to the right.
          </p>
        </div>
      </div>

      <div className="text-left">
        <Form
          square={squares[currentCoordsKey]}
          setSquare={async (content) => {
            set(ref(db, `/grids/${gridId}/${currentCoordsKey}`), {
              content: content,
              author: currentIp,
              editedAt: moment(new Date()).format("LLLL"),
            });
          }}
        />
      </div>
    </>
  );
}

export default App;

//listening to the squares and adding the form
// ratik will now look at the docs. how do i set up the new grid to be set up like grid 1
