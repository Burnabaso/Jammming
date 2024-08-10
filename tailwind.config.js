/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'main-back': '#979FEF',
      'action': '#FF5F96',
      'second-back':'#FE8EB7'
    }

  },
  plugins: [],
}