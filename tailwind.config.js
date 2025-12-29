/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spin-blue': '#1c5ba6',
        'spin-orange': '#ec8026',
        'spin-offwhite': '#ece9e4',
        'spin-teal': '#0e2128',
        'spin-black': '#060606',
        'spin-dark': '#101826',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
