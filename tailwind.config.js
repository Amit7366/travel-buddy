/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'calistoga': ['Calistoga', 'cursive'],
        'dancingScript': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
