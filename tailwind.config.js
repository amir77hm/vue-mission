/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        small: "0.875rem",
        medium: "1rem",
        large: "1.25rem",
      },
    },
  },
  plugins: [],
};
