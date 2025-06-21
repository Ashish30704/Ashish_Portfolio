/** @type {import('tailwindcss').Config} */

const tailwindScrollbar = require('tailwind-scrollbar');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx,css,scss}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [tailwindScrollbar],
}
