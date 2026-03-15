/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Safelist ensures dynamically-constructed classes are never purged in production
  // Only include classes that are constructed dynamically (from variables/functions)
  safelist: [
    // ContactoPage.jsx - method.color is dynamic
    'bg-spin-whatsapp',
    // NoticiasPage.jsx - getCategoryColor() returns these dynamically
    'bg-spin-orange/20',
    'bg-spin-blue/20',
    'bg-spin-blue/10',
  ],
  theme: {
    extend: {
      colors: {
        // Brandbook Colors (Brandbook_10DEZ25.pdf)
        'spin-orange': '#ed8026',    // Energy Orange
        'spin-deep-blue': '#0c2028', // Deep Blue (main dark)
        'spin-teal': '#0c2028',      // Alias for Deep Blue (backwards compatibility)
        'spin-blue': '#50c8ec',      // Padel Blue (updated)
        'spin-offwhite': '#ece9e4',  // Cream White
        'spin-black': '#060606',     // Dark Grey 1
        'spin-dark': '#16171b',      // Main dark background
        // Dark Mode Palette
        'spin-dark-grey-2': '#16171b',
        'spin-dark-grey-3': '#212327',
        'spin-grey': '#48484c',
        'spin-light-grey': '#b5b3b3',
        'spin-whatsapp': '#25D366',
      },
      fontFamily: {
        'heading': ['Sporty Pro', 'Roboto', 'system-ui', 'sans-serif'],
        'sans': ['Roboto', 'system-ui', 'sans-serif'],
        'body': ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
