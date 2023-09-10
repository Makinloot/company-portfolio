/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sofia: ["sofia", "sans-serif"],
        sofiaBold: ["sofia-bold", "sans-serif"],
        sofiaMedium: ["sofia-medium", "sans-serif"],
        sofiaBlack: ["sofia-black", "sans-serif"],
        circular: ["circular", "sans-serif"],
      },
      colors: {
        pinkPrimary: "#A08CE8",
        blackPrimary: "#373737",
        pinkDark: "#b50d86",
      },
    },
  },
  plugins: [],
};
