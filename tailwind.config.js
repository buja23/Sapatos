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
        serif: ['"Edensor"', '"Playfair Display"', 'serif'], // Agora usa Edensor como principal
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}