/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brandbook Colors (Brandbook_10DEZ25.pdf)
        'spin-orange': '#ed8026',    // Energy Orange
        'spin-deep-blue': '#0c2028', // Deep Blue (main dark)
        'spin-teal': '#0c2028',      // Alias for Deep Blue (backwards compatibility)
        'spin-blue': '#1c5ba6',      // Padel Blue
        'spin-offwhite': '#ece9e4',  // Cream White
        'spin-black': '#060606',     // Dark Grey 1
        'spin-dark': '#16171b',      // Main dark background
        // Dark Mode Palette
        'spin-dark-grey-2': '#16171b',
        'spin-dark-grey-3': '#212327',
        'spin-grey': '#48484c',
        'spin-light-grey': '#b5b3b3',
      },
      fontFamily: {
        // Roboto for all text
        'heading': ['Roboto', 'system-ui', 'sans-serif'],
        'sans': ['Roboto', 'system-ui', 'sans-serif'],
        'body': ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
