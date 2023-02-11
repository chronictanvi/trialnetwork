const PostDisplay = ({ coordinates, setCoordinates, postsArray }) => {
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
    <div className="">
      <p className="font-sans mb-10  text-xl text-center h-[fit-content]">
        Post at current coordinates:
      </p>
      <div className="flex flex-col items-center">
        <button onClick={up} className="text-6xl w-[70px]">
          {" "}
          ↑{" "}
        </button>
        <div className="flex items-center">
          <button onClick={left} className="text-6xl">
            {" "}
            ←{" "}
          </button>
          <div className="text-3xl p-10 bg-slate-400	">
            {" "}
            {postsArray[coordinates[0]][coordinates[1]]}{" "}
          </div>

          <button onClick={right} className="text-6xl">
            {" "}
            →
          </button>
        </div>
        <button onClick={down} className=" text-6xl w-[70px]">
          {" "}
          ↓{" "}
        </button>
      </div>
    </div>
  );
};

export default PostDisplay;
