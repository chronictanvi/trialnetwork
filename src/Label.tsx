import { useState } from "react";

interface Props {
  name: string;
  setName: (text: string) => void;
}

export default function Label({ name, setName }: Props) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        value={name}
        placeholder="name here"
        onChange={(event) => setName(event.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}
