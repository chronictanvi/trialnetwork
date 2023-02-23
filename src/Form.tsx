import { useEffect, useState } from "react";

interface Props {
  square: string;
  setSquare: (text: string) => void;
}
export default function Form({ square, setSquare }: Props) {
  return (
    <textarea
      className=" text-left  p-2 my-10 border-[1px] border-slate-50 bg"
      placeholder="write here"
      value={square}
      onChange={(e) => setSquare(e.target.value)} //this needs to go to Firebase


/* 

// const [name, setName] = useState("");
function handleNameChange(event) {
  setName(event.target.value);
}

function handleSetPost() {
  firebase.database().ref("ourname").set({
    square: square
  });


<div>
  <input type="text" value={name} onChange={handleNameChange} />
  <button onClick={handlePost}>Set Name</button>
</div>
} */


    />
  );
}
