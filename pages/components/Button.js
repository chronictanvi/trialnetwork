export default Button;
import CoordinateIndex from "./PostDisplay";
import postsArray from "./PostDisplay";
import { useState } from "react";

function Button({ value }) {

  //const [coordinates, setcoordinates] = useState(Array(9).fill(null));
 // setCoordinates([coordinates[0], coordinates[1]]

  //create new array in the position of the button when its clicked

  function handleClick() {
    console.log("clicked!");
  }

  return (
    <button
      className="p-4 bg-fuchsia-500 shadow-lg rounded-lg"
      onClick={handleClick}

    //create new array in the position of the button when its clicked
    //onClick={() => {postArray?}}

    >
      {value}
    </button>
  );
}
