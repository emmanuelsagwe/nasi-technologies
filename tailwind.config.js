/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nasi-maroon': '#800000',
        'nasi-dark': '#5b0000',
        'nasi-light': '#a94c4c',
        'nasi-gray': '#f9f9f9',
        'nasi-text': '#333333',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
