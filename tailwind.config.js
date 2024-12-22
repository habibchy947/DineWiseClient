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
      },
      backgroundImage:{
        slide1: "url('/src/assets/bannerImg-2.avif')",
        slide2: "url('/src/assets/bannerImg-3.avif')"
      }
    },
  },
  plugins: [require('daisyui'),],
}

