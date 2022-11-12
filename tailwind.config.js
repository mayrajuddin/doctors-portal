/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerBg: "url('/src/assets/images/bg.png')"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      temtheme: {
        primary: '#0FCFEC',
        secondary: '#19D3AE',
        neutral: '#3A4256',
      }
    }],
  },
}
