/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        engine: "wiggle 5s infinite",
      },
      keyframes: {
        wiggle: {
          "0%": { boxShadow: "0 0 0 10px rgba(200, 200, 200, 0.3)" },
          "100%": { boxShadow: "0 0 0 0px rgba(200, 200, 200, 0)" },
          "70%": { boxShadow: "0 0 0 3px rgba(200, 200, 200, 0)" },
        },
      },
    },
  },
};
