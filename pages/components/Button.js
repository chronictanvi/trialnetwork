export default Button;
import { useState } from "react";

function Button({ coordinates, setCoordinates }) {
  //const [coordinates, setcoordinates] = useState(Array(9).fill(null));
  // setCoordinates([coordinates[0], coordinates[1]]

  //create new array in the position of the button when its clicked

  function handleClick() {
    setCoordinates(coordinates);
  }

  return (
    <button
      className="p-4 bg-fuchsia-500 shadow-lg rounded-lg"
      onClick={handleClick}
    >
      {/* // for display */}
      {coordinates.join(",")}
    </button>
  );
}
