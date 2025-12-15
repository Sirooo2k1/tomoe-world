/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#e0b338',
        'accent-dark': '#cfa227',
        'headings': '#1e73be',
        'primary': '#066664',
        'overlay': '#08415c',
        'background': '#FAF8F0',
      },
      fontFamily: {
        'sans': ['Klee One', 'cursive'],
        'display': ['Klee One', 'cursive'],
      },
    },
  },
  plugins: [],
}

