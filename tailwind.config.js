const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'timetravel-button-col': '#88CCF1',
        'desc-button-col': '#3587A4',
        'background-col': '#2D898B',
      },
    },
  },
  plugins: [],
}

