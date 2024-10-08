/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-spinner': {
          '-webkit-appearance': 'none',
          '-moz-appearance': 'textfield',
        },
        '.no-spinner::-webkit-inner-spin-button, .no-spinner::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          'margin': '0',
        },
      })
    },
  ],
};
