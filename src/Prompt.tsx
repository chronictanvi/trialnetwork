import { useState, useEffect } from "react";

const prompts = [
  "What's your favorite color?",
  "What's your favorite book?",
  "What's your favorite movie?",
  "What's your favorite food?",
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
      <h1 className="text-lg cursor-pointer pt-10 text-left">Prompt</h1>

      <p className="font-mono text-left text-zinc-400 w-6/12 text-xs px-1 ">
        {currentPrompt}
      </p>

      <button onClick={getRandomPrompt}>Generate Random Prompt</button>
    </div>
  );
};

export default Prompt;
