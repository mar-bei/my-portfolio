/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'conic-gradient': 'conic-gradient(red 3.6deg, blue 0deg)',
      },
    },
  },
  plugins: [],
}

