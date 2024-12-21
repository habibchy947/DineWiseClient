/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        raleWay: ['Raleway', 'serif']
      }
    },
  },
  plugins: [require('daisyui'),],
}

