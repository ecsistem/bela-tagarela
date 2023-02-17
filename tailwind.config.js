/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          hover: '#82b12fc2',
          primary: '#86ab3a',
          secundary: '#587223',
          tertiary: '#41521c',
        },
        orange: {
          primary: '#faa612',
          secundary: '#fef6e7',
          tertiary: '#f6e58d',
        },
        card: {
          primary: '#ebf4d5',
        },
      },
      fontFamily: {
        primary: ['Fredoka One']
      }
    },
  },

  plugins: [
  ],
}
