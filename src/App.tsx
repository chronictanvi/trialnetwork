import "./App.css";

import GridPage from "./GridPage";
import HomePage from "./HomePage";

const url = new URL(document.location.toString());
//url is a built in datatype that javascript for browser has that allows u to take a string and read it.

let gridId = url.searchParams.get("gridId");

function App() {
  return <>{gridId ? <GridPage /> : <HomePage />}</>;
}

export default App;
