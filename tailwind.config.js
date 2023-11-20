/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost"],
      },
      colors: {
        DarkGrey: "#333136",
        LightGrey: "#F1F3F5",
        Black: "#1D1C1E",
        Peach: "#E7816B",
        LightPeach: "#FFAD9B",
      },
    },
  },
  plugins: [],
};
