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
        aguDisplay: ["Agu Display", "serif"],
        satisfy: ["Satisfy", "serif"]
      },
      backgroundImage:{
        slide1: "url('/src/assets/slid2.jpg')",
        slide2: "url('/src/assets/slid3.avif')",
        slide3: "url('/src/assets/banNew.jpg')",
        myFoodBg: "url('/src/assets/bannerImg-2.avif')",
        myOrderBg: "url('/src/assets/banNew1.avif')",
        footerBg: "url('/src/assets/footerImg.jpg')",
        allFoodBg: "url('/src/assets/footerBg.jpg')",
        addFoodBg: "url('/src/assets/addFoodBg.avif')",
        galleryBg: "url('/src/assets/gallery.jpg')",
      },
    },
  },
  plugins: [require('daisyui'),],
}

