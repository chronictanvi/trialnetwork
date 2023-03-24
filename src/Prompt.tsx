import { useState, useEffect } from "react";

const prompts = [
  " TIP : Try to remain consistent in why you choose to reply in a certain direction. Eg: relative north to the square you're reponding to would be on top of it. What does it mean to move upwards in this space?s  ",
];

const Prompt = () => {
  const [currentPrompt, setCurrentPrompt] = useState("");

  useEffect(() => {
    getRandomPrompt();
  }, []);

  const getRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setCurrentPrompt(prompts[randomIndex]);
  };

  return (
    <div>
      <h1 className="text-lg cursor-pointer pt-10 text-left">
        Prompt{" "}
        <p className="w-1/2 font-mono text-zinc-300 text-sm">
          {" "}
          If you're responding to an existing square, meditate on how its
          content makes you feel.
        </p>
        {/* <button
          className="flex items-center mb-3 px-2 py-1 font-medium text-white bg-red-300 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          onClick={getRandomPrompt}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mr-1 -ml-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="16 3 21 3 21 8"></polyline>
            <line x1="4" y1="20" x2="21" y2="3"></line>
            <polyline points="21 16 21 21 16 21"></polyline>
            <line x1="15" y1="15" x2="21" y2="21"></line>
            <line x1="4" y1="4" x2="9" y2="9"></line>
          </svg>
        </button> */}
      </h1>

      <p className="font-mono text-left pt-5 text-zinc-300 w-1/2 text-sm ">
        {currentPrompt}
      </p>
    </div>
  );
};

export default Prompt;
