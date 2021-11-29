const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  purge: [
    './templates/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'

  ],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-gray' : '#1d1d1f',
        'light-yellow' : '#fcf8f0',
      },
      fontFamily: {
        'calibre' : 'Montserrat',
      }
    },
  },
  variants: {
    extend: {
      transitionProperty: {
        'top': 'top',
        'bottom': 'bottom',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),    
  ],
});
