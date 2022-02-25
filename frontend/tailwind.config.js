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
        'strip-blue' : '#0570de',
        'orange-burger' : '#f8ac32',
        'orange-dark' : '#BD7809',
        'payment-gray' : '#30313d'
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
    require('@tailwindcss/line-clamp'),
  ],
});
