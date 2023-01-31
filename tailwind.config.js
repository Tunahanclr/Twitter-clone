/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          base:"#1DA1F2",
          dark:"hsl(203,89%,46%)",
          light:"hsl(203,89%,96%)",
          hover:'#FDEBED'
        },
        gray:{
          dark:"#657786",
          light:"##AAB8C2",
          extralight:"##E1E8ED",
          lightest:"#F5F8FA",
          timelinehover:"##E93838",
        },
        black:"#14171A"
       }
    },
  },
  plugins: [],
}
