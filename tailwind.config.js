/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");



module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'mmd': { 'max': '768px' },
      'msm': { 'max': '640px' },
    },
  },
  plugins: [],
});