/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {},
    colors:{
      'main-back': '#979FEF',
      'main-back-dark':'#5a5e8c',
      'action': '#FF5F96',
      'action-dark':'#80304c',
      'second-back':'#FE8EB7',
      'second-back-dark':'#c26d8b',
      'action2':'#6B77E8',
      'action2-dark':'#454d96',
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'white-dark':'#c2bebf'
    },
    screens:{
      'xs':{'max':'636px'}
    }

  },
  plugins: [],
}