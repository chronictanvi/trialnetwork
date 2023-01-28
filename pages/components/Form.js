import { useState } from "react";

let nextId = 0;

export default function Form() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Type your post here</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setName("");
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>

      {/* //change this 
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    */}
    </>
  );
}
