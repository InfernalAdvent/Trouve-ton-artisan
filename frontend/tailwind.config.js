/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif']
      },
      colors: {
        primary: '#f1f8fc',
        primaryBlue: '#0074c7',
        secondaryBlue: '#00497c',
        secondaryGrey: '#384050',
        secondaryRed: '#cd2c2e',
        secondaryGreen: '#82b864'
      }
    },
  },
  plugins: [],
}