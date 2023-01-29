import { useEffect, useState } from "react";

let nextId = 0;

export default function Form({ postsArray, setPostsArray, coordinates }) {
  const [postText, setPostText] = useState(
    postsArray[coordinates[0]][coordinates[1]]
  );

  useEffect(() => {
    setPostText(postsArray[coordinates[0]][coordinates[1]]);
  }, [coordinates]);
  // postTexr is set to empty string earlier const [postText, setPostText] = useState("");

  return (
    <>
      <h1 className="text-4xl">Type your post here</h1>
      <input
        value={postText}
        type="text"
        onChange={(event) => setPostText(event.target.value)}
      />
      {/* // event object has a few things on it including whats inside the typed form */}
      <button
        onClick={() => {
          const newPostsArray = [...postsArray];
          newPostsArray[coordinates[0]][coordinates[1]] = postText;
          setPostsArray(newPostsArray);
          setPostText("");
        }}
      >
        Add
      </button>
    </>
  );
}
