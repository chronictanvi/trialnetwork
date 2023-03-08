import { useEffect, useState } from "react";

export default function Tutorial() {
  return (
    <div className="my-5">
      <h1 className="text-2xl text-left py-5"> Navigation </h1>
      <div className="flex">
        <div className="flex-none">
          <img
            className="w-28"
            src="public/keys.png"
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
    </div>
  );
}
