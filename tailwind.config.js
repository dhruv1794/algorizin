const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    theme: {
      screens: {
        'xs': '400px',
        'md': '1000px',
        ...defaultTheme.screens
      }
    },
    extend: {},
  },
  plugins: [],
}