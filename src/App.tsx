import { useState } from "react";
import "./App.css";
import Grid from "./Grid";
import { SQUARE_ROW_COUNT } from "./constants";
import useHotkeys from "@reecelucas/react-use-hotkeys";
import Form from "./Form";

import { getIndexFromCoordinates } from "./utils";
import { usePresence, useSharedReducer } from "driftdb-react";

///FIREBASE🔥

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDilQ0x9rnmDtek8CLHiQ9IGVW9GL93IhY",
  authDomain: "grid-collab-785f7.firebaseapp.com",
  databaseURL: "https://grid-collab-785f7-default-rtdb.firebaseio.com",
  projectId: "grid-collab-785f7",
  storageBucket: "grid-collab-785f7.appspot.com",
  messagingSenderId: "379846720192",
  appId: "1:379846720192:web:a4327a2c466a68bcb10b25",
  measurementId: "G-94V3YFSWKZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getDatabase, ref, set, onValue, push } from "firebase/database";
// import Label from "./Label";

const db = getDatabase();

/////////////////////////////

enum ActionType {
  SetSquare,
}

type Action = {
  type: ActionType.SetSquare;
  text: string;

  currentCoordinates: [number, number];
};

interface State {
  squares: string[];
  currentCoordinates: [number, number];
}

function createInitialState() {
  let squares: string[] = [];
  for (let i = 0; i < SQUARE_ROW_COUNT; i++) {
    for (let j = 0; j < SQUARE_ROW_COUNT; j++) {
      squares.push("");
    }
  }

  return { squares, currentCoordinates: [0, 0] as [number, number] };
}

const initialState = createInitialState();

function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.SetSquare:
      const index = getIndexFromCoordinates(action.currentCoordinates);
      const squares = [...state.squares];
      squares[index] = action.text;
      return { ...state, squares };
    default:
      throw new Error();
  }
}

function App() {
  const [currentCoordinates, setCurrentCoordinates] = useState<
    [number, number]
  >([0, 0]);

  //
  const otherUsers = usePresence("coordinates", currentCoordinates);
  const [state, dispatch] = useSharedReducer("app", reducer, initialState);
  //

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
        {/* <Label></Label> */}
      </div>
      <Grid
        squares={state.squares}
        currentCoordinates={currentCoordinates}
        otherUsers={otherUsers}
      />
      <Form
        square={state.squares[getIndexFromCoordinates(currentCoordinates)]}
        setSquare={(text) => {
          dispatch({ type: ActionType.SetSquare, text, currentCoordinates });
        }}
      />
    </>
  );
}

export default App;
