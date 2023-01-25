import { useState } from "react";

const postsArray = [
  ["this is a post", "this is another post", "this is the last post"],
  ["this a down post", "this is the next down post", "this is last down post"],
  [
    "this is  post rock bottom post",
    "this post is next rock bottom",
    "this is final rock bottom",
  ],
];

const CoordinateIndex = () => {
  const [coordinates, setCoordinates] = useState([0, 0]);

  // Function is called everytime increment button is clicked
  // as long as coordinate is longer than posts array.length we will keep incrementing

  const right = () => {
    let currentRow = postsArray[coordinates[0]];
    if (coordinates[1] < currentRow.length - 1) {
      //creating a new array by taking 1st and second element of the corrdinates array. adding 1 to second elemnt of coordinates array.
      setCoordinates([coordinates[0], coordinates[1] + 1]);
    }
  };

  const left = () => {
    if (coordinates[1] > 0) {
      setCoordinates([coordinates[0], coordinates[1] - 1]);
    }
  };

  const up = () => {
    if (coordinates[0] > 0) {
      setCoordinates([coordinates[0] - 1, coordinates[1]]);
    }
  };

  const down = () => {
    if (coordinates[0] < postsArray.length - 1) {
      setCoordinates([coordinates[0] + 1, coordinates[1]]);
    }
  };

  return (
    <div>
      <h1>
        {" "}
        Current Coordinates {postsArray[coordinates[0]][coordinates[1]]}{" "}
      </h1>
      <button onClick={left}> ← </button>
      <button onClick={right}> →</button>
      <button onClick={up}> ↑ </button>
      <button onClick={down}> ↓ </button>
    </div>
  );
};

export default CoordinateIndex;
