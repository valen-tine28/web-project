/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      emma:"600px",
      victor: "800px",
      favor: "1000px"

    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}