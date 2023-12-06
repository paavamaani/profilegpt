/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-black': '#171719',
        'custom-gray': '#303133',
      },
    },
  },
  plugins: [],
};
