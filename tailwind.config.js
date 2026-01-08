/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-pure': '#FFFFFF',
        'white-soft': '#F8F8F8',
        'gray-100': '#E8E8E8',
        'gray-200': '#D8D8D8',
        'gray-300': '#B8B8B8',
        'gray-400': '#888888',
        'gray-500': '#646464',
        'gray-600': '#484848',
        'gray-700': '#323232',
        'black-soft': '#242424',
        'black-deep': '#161616',
        'black-pure': '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Source Serif Pro', 'Georgia', 'serif'],
      },
    }
  },
  plugins: [],
}
