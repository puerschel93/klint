import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        primaryGray: colors.zinc,
      },
      fontFamily: {
        grtsk: ['GRTSK', 'monospace'],
      },
    },
  },
  plugins: [],
}

