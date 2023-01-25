import { useState } from "react";

const postsArray = [
  ["this is a post", "this is another post", "this is the last post"],
  ["this a down post", "this post is beneath that one", "this is rock bottom"],
];

const CoordinateIndex = () => {
  const [coordinates, setCoordinates] = useState([0, 0]);

  // Function is called everytime increment button is clicked
  // as long as coordinate is longer than posts array.length we will keep incrementing

  const right = () => {
    if (coordinates < postsArray.length - 1) {
      setCoordinates([coordinates[0]][coordinates[1 + 1]]);
    }
  };

  const left = () => {
    if (coordinates > 0) {
      setCoordinates(coordinates - 1);
    }
  };

  const up = () => {
    if (coordinates > 0) {
      setCoordinates(coordinates - 1);
    }
  };

  const down = () => {
    if (coordinates > 0) {
      setCoordinates(coordinates - 1);
    }
  };

  return (
    <div>
      <h1>
        {" "}
        Current Coordinates {postsArray[coordinates[0]][coordinates[1]]}{" "}
      </h1>
      <button onClick={left}>← </button> <button onClick={right}> →</button>
      <button onClick={up}> ↑ </button>
      <button onClick={down}> ↓ </button>
    </div>
  );
};

export default CoordinateIndex;
