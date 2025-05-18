/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: '#BC1782',
        primaryLight: '#E94BA2',
        primaryDark: '#7C0C55',
        secondary: '#1782BC',
        aqua: '#4AD8C7',
        jade: '#00C2A8',
        softBg: '#F1E6EE',
        light: '#F9F9F9',
        darkText: '#4B4B4B',
        grayText: '#A1A1A1',
        babyPink: '#FFCAF0',
      },
    },
  },
  plugins: [],
}
