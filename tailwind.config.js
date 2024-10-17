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
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      keyframes: {
        blinkSmooth: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        blinkSharp: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        blinkSmooth: 'blinkSmooth 0.8s ease-in-out infinite',
        blinkSharp: 'blinkSharp 0.8s steps(2) infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(({ addVariant }) => {
      addVariant('search-cancel', '&::-webkit-search-cancel-button');
    }),
  ],
}

