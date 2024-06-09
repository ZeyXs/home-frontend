/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jost-black': ['"Jost"', 'sans-serif'],
        'libre-barcode': ['"Libre Barcode 39 Extended Text"', 'sans-serif'],
        'fira-code': ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}

