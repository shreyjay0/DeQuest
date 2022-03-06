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
        'deq-blue-sug': '#3972C7',
        'deq-blue-sug-40': '#3972C740',
        'deq-red': '#DA4644',
        'deq-blue-40': '#0062CC40',
        'deq-red-40': '#DA464440',
        'deq-blue-10': '#0062CC10',
      },
      padding: {
        'm-20': '20px',
        'm-30': '30px',
      },
      minWidth: {
        'per-10': '10%',
        'per-20': '20%',
        'per-30': '30%',
        'per-40': '40%',
        'per-50': '50%',
        'per-60': '60%',
        'per-70': '70%',
      },
      maxWidth: {
        'per-10': '10%',
        'per-20': '20%',
        'per-30': '30%',
        'per-40': '40%',
        'per-50': '50%',
        'per-60': '60%',
        'per-70': '70%',
      },
      spacing: {
        'per-10': '10%',
        'per-20': '20%',
        'per-30': '30%',
        'per-40': '40%',
        'per-50': '50%',
        'per-60': '60%',
        'per-70': '70%',

        'd-14': '14px',
        'd-16': '16px',
        'd-18': '18px',
        'd-20': '20px',
        'd-22': '24px',
        'd-30': '30px',
      },
      borderRadius: {
        deq: '15px',
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
