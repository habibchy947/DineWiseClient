/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        raleWay: ['Raleway', 'serif'],
        aguDisplay: ["Agu Display", "serif"]
      }
    },
  },
  plugins: [require('daisyui'),],
}

