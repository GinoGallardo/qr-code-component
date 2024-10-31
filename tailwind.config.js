const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        outfit: ['Outfit', ...defaultTheme.fontFamily.sans], 
      },
    },
  },
  content: [
    './index.html',
  ],
  plugins: [
      require('preline/plugin'),
  ],
}