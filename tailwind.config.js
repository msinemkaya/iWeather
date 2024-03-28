/** @type {import('tailwindcss').Config} */
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
          600 : '#22222F',
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
      }
    },
  },
  plugins: [],
}

