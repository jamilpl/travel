/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../images/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../images/sanFranciscoDesktop.jpg')",
        'yosemite': "url('../images/yosemite.jpg')",
        'seattle': "url('../images/seattle.jpg')",
        'new_york': "url('../images/new_york.jpg')",
        'norway': "url('../images/norway.jpg')",
        'sydney': "url('../images/sydney.jpg')",
        'miami': "url('../images/miami.jpg')",
        'switzerland': "url('../images/switzerland.jpg')",
        'bali': "url('../images/bali.jpg')",
        'chicago': "url('../images/chicago.jpg')",
        'europe': "url('../images/europe.jpg')",
        'iceland': "url('../images/iceland.jpg')",
        'LA': "url('../images/LA.jpg')",
      },
      colors: {
        'primary': '#cc2d4a',
        'secondary': '#8fa206',
        'terciary': '#61aec9',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
