import { useEffect, useState } from "react";

interface Props {
  square: string;
  setSquare: (text: string) => void;
}

import { getDatabase, ref, push, set } from "firebase/database";

// Create a new post reference with an auto-generated id
const db = getDatabase();
const postListRef = ref(db, 'posts');
const newPostRef = push(postListRef);



export default function Form({ square, setSquare }: Props) {
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className=" text-left  p-2 my-10 border-[1px] border-slate-50 bg"
        placeholder="write here"
        value={square}
        onChange={(e) => setSquare(e.target.value)}
      />
    </form>
  );
}
