import "./App.css";

import { v4 as uuidv4 } from "uuid";
import { db } from "./firebase";
import { ref, set } from "firebase/database";

const url = new URL(document.location.toString());
//url is a built in datatype that javascript for browser has that allows u to take a string and read it.

let gridId = url.searchParams.get("gridId");
//if the grid id doesnt exist then we should be able to create a grid there.

// March 8
// Step 1: Trying to add a different colour for other uses
// Step 2: Make Demo
// Step 3: Build out UI for load grid etc

function HomePage() {
  const handleNewGrid = async () => {
    // look at this later: doing the same thing as 26:  window.history.pushState({}, "", `?gridId=${gridId}`);

    const newId = uuidv4();
    const path = `/grids/${newId}/00,00`;
    console.log(path);
    await set(ref(db, path), { content: "hello world!" });
    window.location.replace(`?gridId=${newId}`);
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

      <div className=" grid grid-cols-2 my-4 ">
        <div>
          <button
            className="text-lg mb-4 cursor-pointer text-left bg-transparent border-solid border-2 border-sky-500 "
            onClick={handleNewGrid}
          >
            New Grid
          </button>
          <p className="font-mono text-zinc-400 text-sm mr-5">
            {" "}
            Generates a New Grid at the next 'ID' number. To go to grid, change
            the URL to the next number.{" "}
          </p>
        </div>
        <div>
          <h1 className="text-lg text-left">Load Grid</h1>
          <p className="font-mono text-zinc-400  text-left text-sm mr-5">
            {" "}
            To load a specific grid, change the gridId='number' in the URL.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
