/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      sky: colors.sky,
      lime: colors.lime,
      cyan: colors.cyan,
      blue: colors.blue,
      green: colors.green,
    },
    extend: {
      colors: {
        azul: '#002244',
        gris: '#a5acaf',
        verde: '#69BE28',
      }
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}