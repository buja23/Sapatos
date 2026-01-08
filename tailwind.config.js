/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        madame: {
          gold: '#DABC70',      // 
          darkGold: '#997617',  // 
          rose: '#BC858E',      // 
        }
      },
      fontFamily: {
        // Usaremos 'serif' para títulos (Edensor/Playfair)
        serif: ['"Playfair Display"', 'serif'], 
        // Usaremos 'sans' para textos longos (Lato ou Inter)
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}