/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{jsx,js}"],
  theme: {
    darkMode: 'class',
    extend: {
      fontFamily: {
        inter: ["inter", 'serif'],
      }
    },
  },
  plugins: [],
}
