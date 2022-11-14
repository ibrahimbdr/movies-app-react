/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear',
        'pulse-limited': 'bounce 1s linear'
      },
      fontFamily: {
        'Roboto': 'Roboto'
      }
    },
  },
  plugins: [],
}