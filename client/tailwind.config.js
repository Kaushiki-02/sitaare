// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: '#BD1682', // Main pink
        primaryLight: '#F8AAD5', // Lightest pink
        primaryDark: '#A6205F', // Darker pink for hover/active
        pink: {
          50: '#F8AAD5',
          100: '#F8AAD5',
          200: '#C9186C',
          300: '#BD1682',
          400: '#A6205F',
          500: '#BD1682',
          600: '#A6205F',
          700: '#C9186C',
          800: '#BD1682',
          900: '#A6205F',
        },
        softBg: '#FDF7FA', // Use for hero/feature backgrounds (very light pink/white)
        light: '#fff',
        darkText: '#4B4B4B',
        grayText: '#A1A1A1',
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
}
