import { useEffect, useState } from "react";

export default function Tutorial() {
  return (
    <div className="my-5 mt-10">
      <p className="font-editorial text-left w-9/12 ">
        {" "}
        <p> A conversation unfolds through space and time.</p>{" "}
        <p>
          Think about what you communicate through where you place your
          thoughts, and how they branch out.{" "}
        </p>
      </p>

      <details>
        <summary className=" text-xl pt-10 font-editorial text-left ">
          Navigation →
        </summary>

        <div className="flex">
          <div className="flex-none">
            <img
              className="w-28"
              src="./public/keys.png"
              alt="Keyboard Navigation"
            ></img>
          </div>
          <div className="flex-1 text-left px-5 ">
            <p className="font-editorial">
              Use the keyboard keys to navigate to a square.{" "}
            </p>
            <p>Enter your text in the form.</p>
            <p>Click anywhere on the webpage to submit.</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-none">
            <img className="w-28" src="./public/red.png" alt="Cursor Nav"></img>
          </div>
          <div className="flex-1 text-left px-5 ">
            <p className="font-editorial">This is your current position </p>
          </div>
        </div>
      </details>
    </div>
  );
}
