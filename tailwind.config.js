/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#EEEDE3",
        paper2: "#F7F6EF",
        ink: "#161F1B",
        inkfade: "#3E4A44",
        line: "#B9C2AF",
        accent: "#C1451D",
        teal: "#25554A",
        tealdeep: "#16332B",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["IBM Plex Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
