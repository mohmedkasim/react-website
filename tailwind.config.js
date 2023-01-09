
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // add this line
    "./src/**/*.{html,js,ts,jsx,tsx}", 
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
          primary: '#202225',
          secondary: '#5865f2'
      }
    },
  },
  plugins: [],
}
