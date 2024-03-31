const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'timetravel-button-col': '#88CCF1',
      'desc-button-col': '#3587A4',
      white: colors.white,
      'background-col': '#2D898B',
    },
    extend: {},
  },
  plugins: [],
}

