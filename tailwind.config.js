/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'gray': {
          900 : '#13131A',
          800 : '#16161F',
          700 : '#1C1C27',
          600 : '#1E1E29',
          500 : '#3B3B54',
          400 : '#7F7F98',
          300 : '#ABABC4',
          200 : '#BFBFD4',
          100 : '#FAFAFA',
        },
        'blue-light' : '#8FB2F5',
      },
      fontFamily : {
        'nunito' : '"Nunito", sans-serif'
      },
      backgroundImage : {
        'few-night' : 'url("./src/assets/weather-bg/fewClouds-night.svg")'
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      screens: {
        'xs': '375px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hidden::-webkit-scrollbar": {
          'display': "none",
        },
        ".scrollbar-hidden": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

