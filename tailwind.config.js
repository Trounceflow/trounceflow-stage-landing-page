/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#1E1E1E',
        secondary: 'rgb(0,118,142)',
        light_bg: 'rgba(247, 247, 247, 1)'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
