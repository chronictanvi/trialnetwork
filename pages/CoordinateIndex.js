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
    <div className="grid grid-cols-3 gap-y-6 grid-rows-4">
      {/* --row 1-- */}
      <div className="cols-span-1 "></div>

      <div className="cols-span-1 ">
        <p className="font-sans text-xl col-span-1  h-[fit-content]">
          Current Coordinates
        </p>
      </div>

      <div className="cols-span-1 "></div>

      {/* --row 2-- */}
      <div className="cols-span-1 "></div>

      <div className="cols-span-1 ">
        <button onClick={up} className=" px-48">
          {" "}
          ↑{" "}
        </button>
      </div>

      <div className="col-span-1"> </div>

      {/* --row 3-- */}
      <div className="contents col-span-1 items-end ">
        <button onClick={left}> ← </button>
      </div>

      <div className="text-3xl col-span-1 p-10 bg-slate-400	">
        {" "}
        {postsArray[coordinates[0]][coordinates[1]]}{" "}
      </div>

      <div className=" contents col-span-1">
        <button onClick={right} className=" col-span-1">
          {" "}
          →
        </button>
      </div>
      {/* --row 4-- */}

      <div className="col-span-1" />
      <div className="col-span-1">
        <button onClick={down} className=" px-48">
          {" "}
          ↓{" "}
        </button>
      </div>
      <div className="col-span-1" />
    </div>
  );
};

export default CoordinateIndex;
