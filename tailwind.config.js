const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'light-blue': colors.sky,
        cyan: colors.cyan,
        'deq-bg-light': '#F9F9F9',
        'deq-blue': '#0062CC',
        'deq-blue-lt': '#30A4D9',
        'deq-red': '#DA4644',
      },
      padding: {
        'm-20': '20px',
        'm-30': '30px',
      },
      spacing: {
        'per-10': '10%',
        'per-20': '20%',
        'per-30': '30%',

        'd-14': '14px',
        'd-16': '16px',
        'd-18': '18px',
        'd-20': '20px',
        'd-22': '24px',
        'd-30': '30px',
      },
    },
  },
  variants: {
    scale: ['hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
