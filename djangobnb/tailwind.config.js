/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'airbnb': '#ff385c',
        'airbnb-dark': '#d50027'
      }
    },
  },
  plugins: [],
}

