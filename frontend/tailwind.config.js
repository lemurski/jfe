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
      flex: {
        '0': '0 0 auto'
      },
      colors: {
        'dark-gray' : '#1f2027',
        'light-gray' : '#2a2e3d',
        'text-gray' : '#42444a',
        'red-burger' : '#ff2b32',
        'light-yellow' : '#fcf8f0',
        'strip-blue' : '#0570de',
        'orange-burger' : '#f8ac32',
        'orange-dark' : '#BD7809',
        'payment-gray' : '#30313d'
      },
      fontFamily: {
        'poppins' : 'Poppins',
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
