/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  plugins: [require("@tailwindcss/typography") ],
}
