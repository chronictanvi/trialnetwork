import "./App.css";

import { v4 as uuidv4 } from "uuid";
import GridPage from "./GridPage";
import HomePage from "./HomePage";
import { db } from "./firebase";
import { ref, set } from "firebase/database";

const url = new URL(document.location.toString());
//url is a built in datatype that javascript for browser has that allows u to take a string and read it.

let gridId = url.searchParams.get("gridId");

function App() {
  return <>{gridId ? <GridPage /> : <HomePage />}</>;
}

export default App;
