// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: '#e91e63', // Main pink
        primaryLight: '#fce4ec', // Light pink background
        primaryDark: '#ad1457', // Darker pink for hover/active
        secondary: '#BC1782', // Optional: keep for legacy
        rose: {
          50: '#fff1f5',
          100: '#ffe4ec',
          200: '#ffb8d2',
          300: '#ff8ab8',
          400: '#ff5c9e',
          500: '#ff2e84',
          600: '#e91e63', // matches primary
          700: '#ad1457', // matches primaryDark
          800: '#880e4f',
          900: '#560027',
        },
        pink: {
          50: '#fce4ec',
          100: '#f8bbd0',
          200: '#f48fb1',
          300: '#f06292',
          400: '#ec407a',
          500: '#e91e63',
          600: '#d81b60',
          700: '#ad1457',
          800: '#880e4f',
          900: '#560027',
        },
        softBg: '#fce4ec', // Use for hero/feature backgrounds
        light: '#fff',
        darkText: '#4B4B4B',
        grayText: '#A1A1A1',
      },
    },
  },
  plugins: [],
}
