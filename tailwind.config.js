/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['"Montserrat Alternates"', 'sans-serif'],
    },
    extend: {
      colors: {
        beige: {
          DEFAULT: '#faf6f0',
        },
        aboutBackground: '#c0ccc4', // Add your custom color here
      },
    },
  },
  plugins: [],
}
